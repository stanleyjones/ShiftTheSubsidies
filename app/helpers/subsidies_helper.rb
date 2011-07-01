module SubsidiesHelper

	def currency_options_for_select( selected = nil )
		currencies = Money::Currency::TABLE.keys
		currency_options = []
		currencies.collect { |c|
			currency = Money::Currency::TABLE[c]
			currency_options << ["#{currency[:name]} (#{currency[:iso_code]})", currency[:iso_code]]
		}
		#currencies.sort!
		return options_for_select(currency_options, :selected => selected )
	end

end
