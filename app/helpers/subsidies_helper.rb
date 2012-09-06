require 'money'
require 'money/bank/google_currency'

module SubsidiesHelper

	Money.default_bank = Money::Bank::GoogleCurrency.new

# 	Money::Currency::TABLE[:UAC] = {	
# 		:iso_code        => "UAC",
# 		:name            => "Units of Account",
# 		:symbol          => "UA",
# 		:separator       => ".",
# 		:delimiter       => ","
# 	}

	uac = {
		:priority        => 1,
		:iso_code        => "UAC",
		:iso_numeric     => "840",
		:name            => "Units of Account",
		:symbol          => "UA",
		:subunit         => "Cent",
		:subunit_to_unit => 100,
		:separator       => ".",
		:delimiter       => ","
	}
    Money::Currency.register(uac)

	def currency_options_for_select( selected = nil )
		currencies = Money::Currency.table.keys
		currency_options = []
		currencies.collect { |c|
			currency = Money::Currency.table[c]
			currency_options << ["#{currency[:name]} (#{currency[:iso_code]})", currency[:iso_code]]
		}
		#currencies.sort!
		return options_for_select(currency_options, :selected => selected )
	end
	
	def number_to_short( amount )
		return "$#{ number_to_human( amount, :format => "%n%u", :units => {:unit => "USD", :thousand => "k", :million => "M", :billion => "B"} )}"
	end

	def total_to_category(category)
		amount = 0
		Subsidy.live.each do |s|
			if s.in_category?(category) then amount += s.amount; end
		end
		amount
	end

end
