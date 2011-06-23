class ModifyInstitutions < ActiveRecord::Migration
  def self.up
  	add_column :institutions, :description, :string, :default => ""
  end

  def self.down
		remove_column :institutions, :description
  end
end
