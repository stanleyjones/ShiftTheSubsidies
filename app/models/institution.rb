class Institution < ActiveRecord::Base

	validate :name, :presence => true
	validate :abbreviation, :presence => true
	validate :kind, :inclusion => {:in => ['Multilateral','Bilateral','Export Credit']}, :allow_nil => true
	validate :fiscal_year, :numericality => true
	validate :visible, :presence => true

	has_many :subsidies
	has_many :projects, :through => :subsidies
	
	def amount_awarded
		amount = 0
		self.subsidies.each {|s| amount += s.amount}
		amount
	end

end
