class Entity < ActiveRecord::Base

	validate :name, :presence => true
	validate :kind, :inclusion => {:in => ['Company','Government','Group']}, :allow_nil => true
	
	has_many :subsidies
	
	has_and_belongs_to_many :groups, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "group_id", :association_foreign_key => "member_id"
	has_and_belongs_to_many :members, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "member_id", :association_foreign_key => "group_id"
	
end
