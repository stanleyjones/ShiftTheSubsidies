class CreateSectors < ActiveRecord::Migration
  def self.up
    create_table :sectors do |t|
      t.string :name, :null => false
      t.string :category, :default => nil

      t.timestamps
    end
  end

  def self.down
    drop_table :sectors
  end
end
