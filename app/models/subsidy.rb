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
		if self.amount_usd and self.currency == 'USD'
			# The original currency is USD, so just return amount_usd
			self.amount_usd
		elsif self.amount_usd and self.updated_at.today? 			
			# The original currency isn't USD, but has already been exchanged today
			self.amount_usd
		else
			# We need to exchange the currency again before we return it
			update_amount_usd
			self.amount_usd
		end
  end
    
  private
  
	def update_amount_usd
		amount = 0
		if self.currency == "USD"
			# The original currency is USD, but amount_usd was never set
			amount = self.amount_original
		elsif self.amount_original and Money::Currency.find(self.currency)
			# The original currency exists in the exchange
			amount = self.amount_original.to_money(currency)
			amount = self.amount.exchange_to('USD').dollars
		elsif self.currency == "UAC"
			# The original currency is 'UAC' which we do by hand
			amount = self.amount_original * 0.66
		end
		self.amount_usd = amount.to_i
		self.save!
	end
end