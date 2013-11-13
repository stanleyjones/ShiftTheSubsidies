class CalculateExchangeRateFromExistingAmounts < ActiveRecord::Migration
	def self.up
		change_column :subsidies, :exchange_rate, :decimal, :precision => 10, :scale => 5
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=(`amount_usd` / `amount_original`)')
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1.32 WHERE `currency` like "%EUR%" AND `date` LIKE "%2012%"')
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1.30 WHERE `currency` like "%EUR%" AND `date` LIKE "%2011%"')
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1.34 WHERE `currency` like "%EUR%" AND `date` LIKE "%2010%"')
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1.43 WHERE `currency` like "%EUR%" AND `date` LIKE "%2009%"')
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1.39 WHERE `currency` like "%EUR%" AND `date` LIKE "%2008%"')
	end

	def self.down
		change_column :subsidies, :exchange_rate, :decimal
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1')
	end
end