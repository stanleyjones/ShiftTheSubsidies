class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :get_user, :authorize
  
  protected
  
  	def authorize
  		unless @user
  			redirect_to login_url, :notice => "Please log in"
  		end
  	end
  	
  	def get_user
  		return @user = User.find_by_id(session[:user_id])
  	end
  	
end
