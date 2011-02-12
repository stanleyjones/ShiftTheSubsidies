class Project < ActiveRecord::Base

	validate :name, :presence => true
	validate :country, :presence => true
	validate :sector, :associated => true
	
	belongs_to :sector
	has_many :subsidies
end
