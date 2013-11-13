class AddExchangeRateToSubsidies < ActiveRecord::Migration
  def self.up
  	add_column :subsidies, :exchange_rate, :decimal, :default => 1.0
  end
  def self.down
  	remove_column :subsidies, :exchange_rate
  end
end