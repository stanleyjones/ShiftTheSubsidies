require 'money'
require 'money/bank/google_currency'
Money.default_bank = Money::Bank::GoogleCurrency.new

class Subsidy < ActiveRecord::Base

#	validate :amount_usd, :numericality => true
#	validate :amount_original, :numericality => true
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
  	if amount_original and Money::Currency.find(currency)
  		amount = amount_original.to_money(currency)
  		amount = amount.exchange_to('USD')
			return amount.cents
  		amount.dollars
  	elsif amount_usd and currency == "USD"
  		amount_usd
  	else
  		0
  	end
  end
  
end
