class CalculateExchangeRateFromExistingAmounts < ActiveRecord::Migration
	def up
		change_column :subsidies, :exchange_rate, :decimal, :precision => 10, :scale => 5
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=(`amount_usd` / `amount_original`)')
	end

	def down
		change_column :subsidies, :exchange_rate, :decimal
		Subsidy.connection.execute('UPDATE `subsidies` SET `exchange_rate`=1')
	end
end