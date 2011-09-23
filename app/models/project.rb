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
			
	def received(start_date=nil, end_date=nil, collection=self.subsidies)
		amount = 0
		collection.each do |s|
 			if start_date.nil? or end_date.nil? or s.in_range?(start_date,end_date)
				amount += s.amount
 			end
		end
		amount
	end

	def access?
		self.energy_access ? self.energy_access : false
	end
	
	def clean?
		self.sector ? self.sector.category == "Clean" : false
	end
	
	def region
		self.country
	end

	def sector_name
		self.sector ? self.sector.name : ""
	end
	
	def category
		self.sector ? self.sector.category : "Other"
	end
		
	def icon
		self.sector ? self.sector.icon : "/images/sectors/default.png"
	end
	
	def live_subsidies
		Rails.cache.fetch("projects/#{self.id}-#{self.updated_at}/live_subsidies") do
			subsidies = []
			self.subsidies.each do |s|
				if s.approved and s.institution.visible then subsidies << s; end
			end
			subsidies
		end
	end
	
end
