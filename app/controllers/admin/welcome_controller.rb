class Admin::WelcomeController < ApplicationController

	layout 'admin'

	def dashboard
		
	end

	def clear
		Rails.cache.clear
		redirect_to :controller => :welcome, :action => :dashboard
	end

end