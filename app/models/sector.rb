class Sector < ActiveRecord::Base

	validates :name, :presence => true
	validates :category, :inclusion => {:in => ['Fossil Fuel','Clean','Other']}
	
	has_many :projects

	def self.live
		# TODO: Only return sectors with live projects
		Sector.all(:include => [:projects])
	end

	def received(start_date=nil, end_date=nil, collection=self.projects)
		amount = 0
		collection.each do |p|
			if p.received then amount += p.received(start_date, end_date); end
		end
		amount
	end
	
	def icon
		path = "assets/sectors"
		filename = !self.slug.blank? ? self.slug : self.name.parameterize
		if FileTest.exists? "#{Rails.root}/app/assets/images/sectors/#{filename}.png"
			"/#{path}/#{filename}.png"
		else
			"/#{path}/default.png"
		end
	end
	
	def live_projects
		# Rails.cache.fetch("sectors/#{self.id}-#{self.updated_at}/live_projects") do
			self.projects.live
		# end
	end

end
