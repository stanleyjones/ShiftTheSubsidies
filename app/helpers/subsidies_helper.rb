module SubsidiesHelper

	def currency_options_for_select( selected = nil )
		currencies = Money::Currency::TABLE.keys
		currency_options = []
		currencies.collect { |c|
			currency = Money::Currency::TABLE[c]
			currency_options << [currency[:name],currency[:iso_name]]
		}
		return options_for_select(currency_options, :selected => selected )
	end

end
