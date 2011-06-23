class ModifyProjects < ActiveRecord::Migration
  def self.up
  	remove_column :projects, :identifier
  	add_column :projects, :energy_access, :boolean, :default => false
		Project.all.each do |p|
			if p.tags and p.tags.downcase.include? "energy access"
				p.energy_access = true
				p.save!
			end
		end
		remove_column :projects, :tags
  end

  def self.down
  	add_column :projects, :tags, :string, :default => nil
  	Project.all.each do |p|
  		if p.energy_access
  			p.tags == "Energy Access"
  			p.save!
  		end
  	end
  	remove_column :projects, :energy_access
  	add_column :projects, :identifier, :string
  end
end
