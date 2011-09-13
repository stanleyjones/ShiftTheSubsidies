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

end
