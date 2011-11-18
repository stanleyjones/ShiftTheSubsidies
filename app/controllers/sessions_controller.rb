class SessionsController < ApplicationController
	skip_before_filter :authorize
	
  # GET /login
  def new
  end

	# POST /login
  def create
		if user = User.authenticate(params[:name], params[:password])
			session[:user_id] = user.id
			@user = User.find_by_id(session[:user_id])
			redirect_to( :controller => "admin/welcome", :action => "dashboard" )
		else
			redirect_to login_url, :alert => "Invalid user/password combination"
		end
  end

	# DELETE /logout
  def destroy
  	session[:user_id] = nil
  	redirect_to root_url, :notice => "Logged out"
  end

end
