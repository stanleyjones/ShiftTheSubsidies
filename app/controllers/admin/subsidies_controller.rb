class Admin::SubsidiesController < ApplicationController

	layout 'admin'
	cache_sweeper :subsidy_sweeper, :only => [:create, :update, :destroy]

  def index
    respond_to do |format|
      format.html
      format.json { @subsidies = Subsidy.all }
    end
  end

  def show
    @subsidy = Subsidy.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end

  def new
    @subsidy = Subsidy.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def edit
    @subsidy = Subsidy.find(params[:id])
    @subsidy.valid?
  end

  def create
    @subsidy = Subsidy.new(params[:subsidy])
    if @subsidy.save
    	redirect_to(admin_subsidies_url, :notice => 'Subsidy was successfully created.')
    else
      render :action => "new"
    end
  end

  def update
    @subsidy = Subsidy.find(params[:id])

		if @subsidy.update_attributes(params[:subsidy])
     	redirect_to(admin_subsidies_url, :notice => 'Subsidy was successfully updated.')
    else
    	render :action => "edit"
    end
  end

  def destroy
    @subsidy = Subsidy.find(params[:id])
    @subsidy.destroy
    redirect_to(admin_subsidies_url)
  end
  
  
end