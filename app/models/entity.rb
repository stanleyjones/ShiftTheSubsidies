class Entity < ActiveRecord::Base

	validate :name, :presence => true
	validate :kind, :inclusion => {:in => ['Company','Government','Group']}, :allow_nil => true
	
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	
	has_and_belongs_to_many :groups, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "group_id", :association_foreign_key => "member_id"
	has_and_belongs_to_many :members, :class_name => "Entity", :join_table => "entity_groups", :foreign_key => "member_id", :association_foreign_key => "group_id"
	
	def amount_received(collection = self.subsidies)
		amount = 0
		collection.each do |s|
			if s.amount then amount += s.amount; end
		end
		amount
	end
	
	def received
		amount_received
	end
	
	def percent_clean
		0.5
	end
	
	def percent_access
		0.5
	end
		
end