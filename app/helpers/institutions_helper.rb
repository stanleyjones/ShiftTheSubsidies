module InstitutionsHelper

	def month_name( month_num = 1 )
		return Date::MONTHNAMES[month_num]
	end

end