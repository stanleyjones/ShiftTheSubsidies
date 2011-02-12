class CreateProjects < ActiveRecord::Migration
  def self.up
    create_table :projects do |t|
      t.string :name, :null => false
      t.string :country, :default => nil
      t.text :description, :default => nil
      t.text :notes, :default => nil
      t.string :tags, :default => nil
      t.string :identifier, :default => nil
      t.references :sector

      t.timestamps
    end
  end

  def self.down
    drop_table :projects
  end
end
