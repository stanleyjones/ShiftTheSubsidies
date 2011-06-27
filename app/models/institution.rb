class Institution < ActiveRecord::Base

	validate :name, :presence => true
	validate :abbreviation, :presence => true
	validate :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}, :allow_nil => true
	validate :fiscal_year, :numericality => true
	validate :visible, :presence => true

	belongs_to :institution_group
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true
	
	def amount_awarded(collection = self.subsidies)
		amount = 0
		collection.each do |s|
			if s.amount then amount += s.amount; end
		end
		amount
	end
	
	def awarded
		amount_awarded
	end

	def percent_clean
		clean = 0
		self.subsidies.each do |s|
			if s.project and s.project.sector and s.project.sector.category == "Clean"
				clean += s.amount
			end
		end
		return clean * 1.0 / [amount_awarded,1].max
	end
	
	def percent_access
		access = 0
		self.subsidies.each do |s|
			#if s.project and s.project.tags and s.project.tags == "Energy Access"
			if s.project and s.project.energy_access
				access += s.amount
			end
		end
		return access * 1.0 / [amount_awarded,1].max
	end
	
	def ratio_scale
		sorted = Institution.all.sort {|a,b| b.percent_clean <=> a.percent_clean }
		most = sorted.first.percent_clean
		least = sorted.last.percent_clean
		return (percent_clean * 1.0 - least) / (most - least)
	end
	
	def scale
		sorted = Institution.all.sort {|a,b| b.amount_awarded <=> a.amount_awarded }
		most = sorted.first.amount_awarded
		least = sorted.last.amount_awarded
		return (amount_awarded * 1.0 - least) / (most - least)
	end
	
	def shortname
		self.abbreviation || self.name
	end

end
