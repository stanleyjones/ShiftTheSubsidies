class AllowBiggerSubsidies < ActiveRecord::Migration
  def self.up
  	change_column :subsidies, :amount_usd, :bigint
  	change_column :subsidies, :amount_original, :bigint
  	
  	Subsidy.all.each do |s|
  		if s.currency == 'USD' and s.amount_usd
  			s.amount_original = s.amount_usd
  			s.save!
  		end
  	end
  	
  	Subsidy.all.each do |s|
  		if s.currency == 'Euro' or s.currency == 'Euros' or s.currency == 'EURO'
  			s.currency = 'EUR'
  			s.save!
  		end
  	end
  end

  def self.down
		change_column :subsidies, :amount_usd, :integer
		change_column :subsidies, :amount_original, :integer
		
		# No reverse migrations
  end
end