include SubsidiesHelper

class Subsidy < ActiveRecord::Base

#	validate :amount_usd, :numericality => true
	validate :amount_original, :numericality => true
	validate :currency, :presence => true
	validate :institution, :presence => true, :associated => true
	validate :entity, :presence => true, :associated => true
	validate :project, :presence => true, :associated => true
	validate :kind, :inclusion => {:in => ['Equity','Grant','Guarantee','Loan']}, :allow_nil => true
	validate :approved, :presence => true

  belongs_to :institution
  belongs_to :entity
  belongs_to :project
    
  def amount
  	if self.currency != "USD" and !self.updated_at.today?
  		update_amount_usd
  	end
  	self.amount_usd || 0
  end
    
  private
  
	def update_amount_usd
		usd = 0
		if self.currency == "USD"
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
		self.save!
	end
end