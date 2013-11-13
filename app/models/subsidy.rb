include SubsidiesHelper

class Subsidy < ActiveRecord::Base

	validates :amount_usd, :numericality => { :greater_than_or_equal_to => 0 }, :allow_nil => true
	validates :amount_original, :numericality => { :greater_than_or_equal_to => 0 }
	validates :currency, :presence => true
  validates :exchange_rate, :presence => true, :numericality => true
	validates :institution, :presence => true
	validates :entity, :presence => true
	validates :project, :presence => true
	validates :kind, :inclusion => {:in => ['Equity','Grant','Guarantee','Loan']}

  belongs_to :institution, :touch => true
  belongs_to :entity, :touch => true
  belongs_to :project, :touch => true
  
  def self.live
  	# TODO: Improve the math for fiscal years
  	Subsidy.joins(:institution).where(
  		"institutions.visible = true AND approved = true AND date > :start_date AND date < :end_date AND amount_original > 0",
  		{:start_date => "#{START_YEAR-1}-01-01", :end_date => "#{END_YEAR}-12-31"}
  	).uniq
  end
  
  def amount
  	Rails.cache.fetch("subsidy/#{self.id}-#{self.updated_at}/amount", :expires_in => 24.hours) do
  		if self.amount_usd
  			return self.amount_usd
  		elsif self.amount_original
	  		if self.currency == "USD"
  				return self.amount_original
	  		elsif self.currency == "UAC"
  				return self.amount_original * 0.66
  			# elsif Money::Currency.find(self.currency)
  			# 	original = self.amount_original.to_money(self.currency)
  			# 	return original.exchange_to('USD').dollars
        elsif self.exchange_rate != nil
          return self.amount_original * self.exchange_rate
        else
          return 0
	  		end
  		else
  			return 0
  		end
  	end
  end
  
  def in_range?(start_date,end_date)
  	if self.date 
  		return (self.date >= start_date and self.date <= end_date)
  	else
  		false
  	end
  end
  
  def in_category?(category)
		if self.project and self.project.sector and self.project.sector.category
			return self.project.sector.category == category
		else
			false
		end
	end

  private
  
	def update_amount_usd
		usd = self.amount_usd # Keep the original value safe!
		if self.amount_original and self.currency == "USD"
			# The original currency is USD, but amount_usd was never set
			usd = self.amount_original
		elsif self.amount_original and Money::Currency.find(self.currency)
			# The original currency exists in the exchange
			usd = self.amount_original.to_money(currency)
			usd = usd.exchange_to('USD').dollars
		elsif self.currency == "UAC"
			# The original currency is 'UAC' which we do by hand
			usd = self.amount_original * 0.66
		end
		self.amount_usd = usd.to_i
		self.save
	end
end