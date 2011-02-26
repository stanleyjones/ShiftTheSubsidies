class InstitutionGroup < ActiveRecord::Base

	validate :name, :presence => true, :uniqueness => true
	
	has_many :institutions

end
