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

#  before_validation :decimalize

  belongs_to :institution
  belongs_to :entity
  belongs_to :project
    
  def amount
  	if amount_original and Money::Currency.find(currency)
  		amount = amount_original.to_money(currency)
	  	amount = amount.exchange_to('USD')
  		return amount.dollars
  	elsif amount_usd
  		amount_usd
  	elsif currency == "UAC"
  		return amount_original * 0.66
  	else
  		0
  	end
  end
  
  private
  
  def decimalize
		self.amount_original = self.amount_original.to_s.gsub(/[^\d\.]/, '').to_f
	end
  
end