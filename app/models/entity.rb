class Entity < ActiveRecord::Base

	validates :name, :presence => true
	validates :kind, :inclusion => {:in => ['Company','Government','Group']}
	
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :institutions, :through => :subsidies, :uniq => true
	
	has_and_belongs_to_many :groups, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "group_id", :association_foreign_key => "member_id"
	has_and_belongs_to_many :members, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "member_id", :association_foreign_key => "group_id"

	attr_accessible :name, :kind, :group_ids

	def self.live
		Entity.joins(:institutions,:subsidies).where(
			"institutions.visible = true AND subsidies.approved = true AND subsidies.date > :start_date AND subsidies.date < :end_date AND subsidies.amount_original > 0",
			{:start_date => "#{START_YEAR}-01-01", :end_date => "#{END_YEAR}-12-31"}
		).uniq
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
	
	comma do

		name
		kind
		received
		projects :size => 'Projects'

	end

	def live_subsidies
		self.subsidies.live
	end
	
	def live_projects
		projects = []
		self.live_subsidies.each do |s|
			projects << s.project
		end
		projects.uniq
	end
	
	def live_institutions
		institutions = []
		self.live_subsidies.each do |s|
			if institutions << s.institution; end
		end
		institutions.uniq
	end
		
end