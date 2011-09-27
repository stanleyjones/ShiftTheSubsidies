class Institution < ActiveRecord::Base

	validates :name, :presence => true
	validates :abbreviation, :presence => true
	validates :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}
	validates :fiscal_year, :numericality => true

	belongs_to :institution_group
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true
	
	def self.live
		Institution.where(:visible => true)
	end
	
	def shortname
		self.abbreviation || self.name
	end

	def awarded(start_date=nil,end_date=nil,collection=self.subsidies)
		amount = 0
		collection.each do |s|
 			if start_date.nil? or end_date.nil? or s.in_range?(start_date,end_date)
				amount += s.amount
 			end
		end
		amount.to_i
	end
	
	def awarded_to_category(category,start_date=nil,end_date=nil,collection=self.subsidies)
		subsidies = []
		collection.each do |s|
			if s.in_category?(category) then subsidies << s; end
		end
		awarded(start_date,end_date,subsidies)
	end

	def awarded_to_energy_access(start_date=nil,end_date=nil,collection=self.subsidies)
		subsidies = []
		collection.each do |s|
			if s.project and s.project.energy_access then subsidies << s; end
		end
		awarded(start_date,end_date,subsidies)
	end
	
	def awarded_to_entity(entity,start_date=nil,end_date=nil,collection=self.subsidies)
		subsidies = []
		collection.each do |s|
			if s.entity and s.entity == entity then subsidies << s; end
		end
		awarded(start_date,end_date,subsidies)
	end
	
	def live_subsidies
 		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/live_subsidies") do
			self.subsidies.live
		end
	end
	
	def live_projects
 		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/live_projects") do
			self.projects.live
		end
	end

	def projects_from_subsidies(start_date=nil, end_date=nil, collection=self.subsidies)
		projects = []
		collection.each do |s|
 			if start_date.nil? or end_date.nil? or s.in_range?(start_date,end_date)
				projects << s.project
 			end
		end
		projects.uniq
	end
end
