class InstitutionGroup < ActiveRecord::Base

	validates :name, :presence => true, :uniqueness => true
	
	has_many :institutions

end
