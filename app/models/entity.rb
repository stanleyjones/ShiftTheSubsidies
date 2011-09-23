class Entity < ActiveRecord::Base

	validates :name, :presence => true
	validates :kind, :inclusion => {:in => ['Company','Government','Group']}
	
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :institutions, :through => :subsidies, :uniq => true
	
	has_and_belongs_to_many :groups, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "group_id", :association_foreign_key => "member_id"
	has_and_belongs_to_many :members, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "member_id", :association_foreign_key => "group_id"

	def self.live
		Entity.all(:include => [:subsidies,:institutions], :conditions => {'subsidies.approved' => true, 'institutions.visible' => true})
	end
	
	def received(start_date=nil, end_date=nil, collection=self.subsidies)
		amount = 0
		collection.each do |s|
			if s.amount then amount += s.amount; end
		end
		amount
	end
	
	def received_to_category(category,start_date=nil,end_date=nil,collection=self.subsidies)
		subsidies = []
		collection.each do |s|
			if s.in_category?(category) then subsidies << s; end
		end
		received(start_date,end_date,subsidies)
	end

	def received_to_energy_access(start_date=nil,end_date=nil,collection=self.subsidies)
		subsidies = []
		collection.each do |s|
			if s.project and s.project.energy_access then subsidies << s; end
		end
		received(start_date,end_date,subsidies)
	end
	
	def live_subsidies
		Rails.cache.fetch("entities/#{self.id}-#{self.updated_at}/live_subsidies") do
			# All approved subsidies received by this entity from a visible institution
			self.subsidies.live
		end
	end
	
	def live_projects
		Rails.cache.fetch("entities/#{self.id}-#{self.updated_at}/live_projects") do
			# All projects receiving funding through one of this entity's live subsidies (see above)
			projects = []
			self.live_subsidies.each do |s|
				projects << s.project
			end
			projects.uniq
		end
	end
	
	def live_institutions
		Rails.cache.fetch("entities/#{self.id}-#{self.updated_at}/live_institutions") do
			# All visible institutions funding one of this entity's live projects
			institutions = []
			self.live_projects.each do |p|
				p.live_subsidies.each do |s|
					if s.institution.visible then institutions << s.institution; end
				end
			end
			institutions.uniq
		end
	end
		
end