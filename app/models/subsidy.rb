class Subsidy < ActiveRecord::Base

	validate :amount_usd, :numericality => true
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
  	#[TODO] Currently returns USD or 0, should convert amount_original if not USD
  	amount_usd || 0
  end
  
end
