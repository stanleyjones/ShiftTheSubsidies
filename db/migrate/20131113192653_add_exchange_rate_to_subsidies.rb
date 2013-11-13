class AddExchangeRateToSubsidies < ActiveRecord::Migration
  def change
  	add_column :subsidies, :exchange_rate, :decimal, :default => 1.0
  end
end