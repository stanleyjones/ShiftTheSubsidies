class ModifySectors < ActiveRecord::Migration
  def self.up
  	add_column :sectors, :description, :string, :default => nil
  	add_column :sectors, :slug, :string, :default => nil
  end

  def self.down
  	remove_column :sectors, :description
  	remove_column :sectors, :slug
  end
end
