class InstitutionGroup < ActiveRecord::Base

	validates :name, :presence => true, :uniqueness => true
	
	has_many :institutions
	
	def self.live
		InstitutionGroup.joins(:institutions).where(
			"institutions.visible = true"
		).uniq
	end
	
	def awarded(start_date=nil,end_date=nil,collection=self.institutions)
		amount = 0
		collection.each do |i|
			amount += i.awarded(start_date,end_date,i.live_subsidies)
		end
		amount.to_i
	end

	def awarded_to_category(category,start_date=nil,end_date=nil,collection=self.institutions)
		amount = 0
		collection.each do |i|
			amount += i.awarded_to_category(category,start_date,end_date,i.live_subsidies)
		end
		amount.to_i
	end

	def awarded_to_energy_access(start_date=nil,end_date=nil,collection=self.institutions)
		amount = 0
		collection.each do |i|
			amount += i.awarded_to_energy_access(start_date,end_date)
		end
		amount.to_i
	end
	
	def live_institutions
# 		Rails.cache.fetch("institution_groups/#{self.id}-#{self.updated_at}/live_institutions") do
			self.institutions.live
#		end
	end
	
end
