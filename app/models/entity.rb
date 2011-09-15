class Entity < ActiveRecord::Base

	validate :name, :presence => true
	validate :kind, :inclusion => {:in => ['Company','Government','Group']}, :allow_nil => true
	
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :institutions, :through => :subsidies, :uniq => true
	
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
		clean = 0
		self.subsidies.each do |s|
			if s.project and s.project.sector and s.project.sector.category == "Clean"
				clean += s.amount.to_i
			end
		end
		return clean * 1.0 / [amount_received,1].max
	end

	
	def percent_access
		access = 0
		self.subsidies.each do |s|
			#if s.project and s.project.tags and s.project.tags == "Energy Access"
			if s.project and s.project.energy_access
				access += s.amount
			end
		end
		return access * 1.0 / [amount_received,1].max
	end
			
end