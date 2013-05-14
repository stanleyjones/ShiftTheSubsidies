class StaticController < ApplicationController
	skip_before_filter :authorize
 	# caches_action :index, :about, :methodology

	def index
	end

	def about
	end
	
	def methodology
	end

end
