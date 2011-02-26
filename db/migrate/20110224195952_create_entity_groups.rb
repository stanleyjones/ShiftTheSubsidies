class CreateEntityGroups < ActiveRecord::Migration
  def self.up
  	create_table :entity_groups, :id => false do |t|
  		t.integer :group_id, :null => false
  		t.integer :member_id, :null => false
  	end
  end

  def self.down
  	drop_table :entity_groups
  end
end
