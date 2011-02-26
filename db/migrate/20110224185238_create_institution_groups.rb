class CreateInstitutionGroups < ActiveRecord::Migration
  def self.up
    create_table :institution_groups do |t|
      t.string :name, :null => false
      t.string :country, :default => nil
      t.string :region, :default => nil

      t.timestamps
    end
    
    change_table :institutions do |t|
    	t.references :institution_group
    end
  end

  def self.down
    drop_table :institution_groups
    remove_column :institutions, :institution_group_id
  end
end
