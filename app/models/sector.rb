class Sector < ActiveRecord::Base

	validates :name, :presence => true
	validates :category, :inclusion => {:in => ['Fossil Fuel','Clean','Other']}
	
	has_many :projects

	def amount_received(collection = self.projects)
		amount = 0
		collection.each do |p|
			if p.received then amount += p.received; end
		end
		amount
	end
	
	def received
		amount_received
	end
	
	def icon
		path = "stylesheets/icons/sector"
		filename = "#{self.name.parameterize}.png"
		if FileTest.exists? "#{RAILS_ROOT}/public/#{path}/#{filename}"
			"/#{path}/#{filename}"
		else
			"/#{path}/default.png"
		end
	end

end
