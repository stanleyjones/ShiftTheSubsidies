module SubsidiesHelper

	def currency_options_for_select( selected = nil )
		currencies = Money::Currency::TABLE.keys
		return options_for_select(currencies, :selected => selected )
	end

end
