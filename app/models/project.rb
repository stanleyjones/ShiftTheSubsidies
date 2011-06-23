class Project < ActiveRecord::Base

	validate :name, :presence => true
	validate :country, :presence => true
	validate :sector, :presence => true, :associated => true
	
	belongs_to :sector
	has_many :subsidies
	has_many :institutions, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true
	
	def access
		if defined? energy_access
			return energy_access
		else
			return "no"
		end
	end
	
	def amount_received(collection = self.subsidies)
		amount = 0
		collection.each do |s|
			if s.amount then amount += s.amount; end
		end
		amount
	end
	
	def received
		amount_received
	end
	
end
