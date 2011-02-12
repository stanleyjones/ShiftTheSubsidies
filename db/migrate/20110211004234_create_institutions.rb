class CreateInstitutions < ActiveRecord::Migration
  def self.up
    create_table :institutions do |t|
      t.string :name, :null => false
      t.string :abbreviation, :default => nil
      t.string :kind, :default => nil
      t.integer :fiscal_year, :default => 1
      t.boolean :visible, :default => false

      t.timestamps
    end
  end

  def self.down
    drop_table :institutions
  end
end
