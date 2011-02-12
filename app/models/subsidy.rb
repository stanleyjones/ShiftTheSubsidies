class Subsidy < ActiveRecord::Base

	validate :amount, :numericality => true
	validate :currency, :presence => true
	validate :institution, :associated => true
	validate :entity, :associated => true
	validate :project, :associated => true
	validate :kind, :inclusion => {:in => ['Equity','Grant','Guarantee','Loan']}, :allow_nil => true
	validate :approved, :presence => true

  belongs_to :institution
  belongs_to :entity
  belongs_to :project
end
