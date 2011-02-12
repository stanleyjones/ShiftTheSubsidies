class Sector < ActiveRecord::Base

	validate :name, :presence => true
	validate :category, :inclusion => {:in => ['Fossil Fuel','Renewable']}, :allow_nil => true
	
	has_many :projects
end
