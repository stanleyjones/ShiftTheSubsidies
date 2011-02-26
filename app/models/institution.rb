class Institution < ActiveRecord::Base

	validate :name, :presence => true
	validate :abbreviation, :presence => true
	validate :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}, :allow_nil => true
	validate :fiscal_year, :numericality => true
	validate :visible, :presence => true

	belongs_to :institution_group
	has_many :subsidies
	has_many :projects, :through => :subsidies
	
	def amount_awarded(collection = self.subsidies)
		amount = 0
		collection.each {|s| amount += s.amount}
		amount
	end

	def ratio
		renewable_amount = 0
		self.subsidies.each do |s|
			if s.project.sector.category == "Renewable"
				renewable_amount += s.amount
			end
		end
		return renewable_amount * 1.0 / [amount_awarded,1].max
	end
	
	def scale
		sorted = Institution.all.sort {|a,b| b.amount_awarded <=> a.amount_awarded }
		most = sorted.first.amount_awarded
		least = sorted.last.amount_awarded
		return (amount_awarded * 1.0 - least) / (most - least)
	end

end
