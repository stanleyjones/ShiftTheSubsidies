include SubsidiesHelper

class Subsidy < ActiveRecord::Base
		
	validates :amount_usd, :numericality => { :greater_than_or_equal_to => 0 }, :allow_nil => true
	validates :amount_original, :numericality => { :greater_than_or_equal_to => 0 }
	validates :currency, :presence => true
	validates :institution, :presence => true
	validates :entity, :presence => true
	validates :project, :presence => true
	validates :kind, :inclusion => {:in => ['Equity','Grant','Guarantee','Loan']}

  belongs_to :institution
  belongs_to :entity
  belongs_to :project
      
  def amount
  	if self.amount_usd and Time.now < self.updated_at.since(600)
  		# The USD amount exists and is current (in the last ten minutes)
  		self.amount_usd
  	else
  		# The USD amount doesn't exist or has expired
  		update_amount_usd
  		self.amount_usd
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