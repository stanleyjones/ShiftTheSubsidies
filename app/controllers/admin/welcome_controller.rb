class Admin::WelcomeController < ApplicationController


	def dashboard
		
	end

	def clear
		Rails.cache.clear
		redirect_to :controller => :welcome, :action => :dashboard
	end

end