class Project < ActiveRecord::Base

	validate :name, :presence => true
	validate :country, :presence => true
	validate :sector, :presence => true, :associated => true
	
	belongs_to :sector
	has_many :subsidies
	has_many :entities, :through => :subsidies, :uniq => true
	
end
