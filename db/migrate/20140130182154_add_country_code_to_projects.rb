class AddCountryCodeToProjects < ActiveRecord::Migration
  def change
  	add_column :projects, :country_code, :string, :default => nil

  	Project.reset_column_information

  	Project.all.each do |p|
  		if cc = Carmen::country_code(p.country)
	  		p.country_code = cc
	  		p.save
	  	end
  	end

  end
end