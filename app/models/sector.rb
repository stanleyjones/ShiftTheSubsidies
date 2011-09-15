class Sector < ActiveRecord::Base

	validate :name, :presence => true
	validate :category, :inclusion => {:in => ['Fossil Fuel','Clean']}, :allow_nil => true
	
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
		if FileTest.exists? "#{RAILS_ROOT}/public/stylesheets/icons/sector/#{self.name.downcase}.png"
			"/stylesheets/icons/sector/#{self.name.downcase}.png"
		else
			"/stylesheets/icons/sector/default.png"
		end
	end

end
