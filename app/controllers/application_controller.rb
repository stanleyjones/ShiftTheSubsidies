class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :authorize, :get_daterange
  #before_filter :authenticate #HTTP
  
  protected
  
  def authorize
  	get_user
  	unless @user
  		redirect_to login_url, :notice => "Please log in"
  	end
  end
  	
  def get_user
  	return @user = User.find_by_id(session[:user_id])
  end
  	
  def get_daterange
  	start_year = params[:s] || START_YEAR
		end_year = params[:e] || params[:s] || END_YEAR
  	@start_date = Date.civil(start_year.to_i,1,1)
  	@end_date = Date.civil(end_year.to_i,12,31)
	end
	
	def authenticate
		authenticate_or_request_with_http_basic do |username, password|
			username == "shift" && password == "subs"
		end
	end
end