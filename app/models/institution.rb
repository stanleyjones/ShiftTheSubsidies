class Institution < ActiveRecord::Base

	validates :name, :presence => true
	validates :abbreviation, :presence => true
	validates :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}
	validates :fiscal_year, :numericality => true
	#validates :visible, :presence => true

	belongs_to :institution_group
	has_many :subsidies
	has_many :projects, :through => :subsidies, :uniq => true
	has_many :entities, :through => :subsidies, :uniq => true
	
	def self.live
		Institution.where(:visible => true)
	end
	
	def amount_awarded(collection = self.subsidies, start_date = nil, end_date = nil)
		amount = 0
		collection.each do |s|
			if s.in_range?(start_date,end_date)
				amount += s.amount
			end
		end
		amount
	end
	
	def percent_clean_energy(collection = self.subsidies, start_date = nil, end_date = nil)
		clean = 0
		collection.each do |s|
			if s.project and s.project.clean and s.in_range?(start_date,end_date)
				clean += s.amount
			end
		end
		return clean * 1.0 / [amount_awarded(collection, start_date, end_date),1].max
	end
	
	def live_awarded
		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/live_awarded", :expires_in => 10.minutes) do
			amount_awarded(self.subsidies.live)
		end
	end
	
	def awarded
		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/awarded", :expires_in => 10.minutes) do
			amount_awarded
		end
	end
	
	def awarded_to( entity )
		amount = 0
		self.subsidies.each do |s|
			if s.entity == entity then amount += s.amount; end
		end
		amount
	end

	def percent_clean
		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/percent_clean", :expires_in => 10.minutes) do
			clean = 0
			self.subsidies.each do |s|
				if s.project and s.project.sector and s.project.sector.category == "Clean"
					clean += s.amount
				end
			end
			return clean * 1.0 / [amount_awarded,1].max
		end
	end
	
	def percent_access
		Rails.cache.fetch("institutions/#{self.id}-#{self.updated_at}/percent_access", :expires_in => 10.minutes) do
			access = 0
			self.subsidies.each do |s|
				#if s.project and s.project.tags and s.project.tags == "Energy Access"
				if s.project and s.project.energy_access
					access += s.amount
				end
			end
			return access * 1.0 / [amount_awarded,1].max
		end
	end
		
	def shortname
		self.abbreviation || self.name
	end

end
