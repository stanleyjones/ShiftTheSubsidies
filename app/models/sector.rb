class Sector < ActiveRecord::Base

	validates :name, :presence => true
	validates :category, :inclusion => {:in => ['Fossil Fuel','Clean','Other']}
	
	has_many :projects

	def self.live
		# [TODO] Only return sectors with live projects
		Sector.all
	end

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
		path = "images/sectors"
		filename = !self.slug.blank? ? self.slug : self.name.parameterize
		if FileTest.exists? "#{RAILS_ROOT}/public/#{path}/#{filename}.png"
			"/#{path}/#{filename}.png"
		else
			"/#{path}/default.png"
		end
	end

end
