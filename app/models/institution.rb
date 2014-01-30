class Institution < ActiveRecord::Base

	validates :name, :presence => true
	validates :abbreviation, :presence => true
	validates :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}
	validates :fiscal_year, :numericality => true

	belongs_to :institution_group, :touch => true
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true
	
	def self.live
		Institution.where(:visible => true)
	end
	
	def self.ungrouped
		Institution.where(:institution_group_id => nil)
	end
	
	def shortname
		self.abbreviation || self.name
	end

	def awarded(start_date=nil,end_date=nil,collection=self.subsidies)
		amount = 0
		collection.each do |s|
			# TODO: Double-check fiscal year calculation
 			if start_date.nil? or end_date.nil? or s.in_range?(start_date-(self.fiscal_year-1).months,end_date-(self.fiscal_year-1).months)
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

	def awarded_to_clean(start_date=nil,end_date=nil,collection=self.subsidies)
		awarded_to_category('Clean',start_date,end_date,subsidies)
	end

	def awarded_to_fossil_fuel(start_date=nil,end_date=nil,collection=self.subsidies)
		awarded_to_category('Fossil Fuel',start_date,end_date,subsidies)
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

	def percent_awarded_to_category(category,start_date=nil,end_date=nil,collection=self.subsidies)
		(1.0 * self.awarded_to_category(category,start_date,end_date,collection) / self.awarded(start_date,end_date,collection)).round(3)
	end

	def percent_awarded_to_clean(start_date=nil,end_date=nil,collection=self.subsidies)
		self.percent_awarded_to_category('Clean',start_date,end_date,collection)
	end
	
	def percent_awarded_to_fossil_fuel(start_date=nil,end_date=nil,collection=self.subsidies)
		self.percent_awarded_to_category('Fossil Fuel',start_date,end_date,collection)
	end

	def percent_awarded_to_energy_access(start_date=nil,end_date=nil,collection=self.subsidies)
		(1.0 * self.awarded_to_energy_access(start_date,end_date,collection) / self.awarded(start_date,end_date,collection)).round(3)
	end

	def live_subsidies
		self.subsidies.live
	end
	
	def live_projects
		self.projects.live
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

	def fiscal_year_end(year=nil)
		fiscal_year_begins = Date.new(year || Date.current().year,self.fiscal_year,1)
		fiscal_year_ends = fiscal_year_begins - 1.day
		return fiscal_year_ends.month.to_s + "-" + fiscal_year_ends.day.to_s
	end

	# Export CSV via Comma gem

	comma do

		name
		abbreviation
		kind

		awarded
		awarded_to_clean
		awarded_to_fossil_fuel
		awarded_to_energy_access
		percent_awarded_to_clean '% Clean'
		percent_awarded_to_fossil_fuel '% Fossil Fuel'
		percent_awarded_to_energy_access '% Energy Access'

	end

end
