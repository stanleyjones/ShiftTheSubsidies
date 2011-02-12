class Entity < ActiveRecord::Base

	validate :name, :presence => true
	validate :kind, :inclusion => {:in => ['Company','Government','Group']}, :allow_nil => true
	
	has_many :subsidies
end
