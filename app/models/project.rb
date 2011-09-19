class Project < ActiveRecord::Base

	validates :name, :presence => true
	validates :country, :presence => true
	validates :sector, :presence => true
	
	belongs_to :sector
	has_many :subsidies
	has_many :institutions, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true

	def self.live
		Project.all(:include => [:subsidies,:institutions], :conditions => {'subsidies.approved' => true, 'institutions.visible' => true})
	end
			
	def access
		if defined? energy_access
			return energy_access
		else
			return "no"
		end
	end
	
	def clean
		if self.sector 
			return self.sector.category == "Clean"
		else
			return false
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
	
	def icon
		self.sector ? self.sector.icon : "/stylesheets/icons/sector/default.png"
	end
	
end
