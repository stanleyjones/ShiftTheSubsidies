class StaticController < ApplicationController
	skip_before_filter :authorize

	def index
	end

	def about
	end
	
	def methodology
	end

end
