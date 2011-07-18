class Admin::SubsidiesController < ApplicationController

	layout 'admin'

  # GET /subsidies
  # GET /subsidies.xml
  def index
    @subsidies = Subsidy.all

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
      format.xml  { render :xml => @subsidies }
    end
  end

  # GET /subsidies/1
  # GET /subsidies/1.xml
  def show
    @subsidy = Subsidy.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
      format.xml  { render :xml => @subsidy }
    end
  end

  # GET /subsidies/new
  # GET /subsidies/new.xml
  def new
    @subsidy = Subsidy.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @subsidy }
    end
  end

  # GET /subsidies/1/edit
  def edit
    @subsidy = Subsidy.find(params[:id])
  end

  # POST /subsidies
  # POST /subsidies.xml
  def create
    @subsidy = Subsidy.new(params[:subsidy])

    respond_to do |format|
      if @subsidy.save
   			expire_action :action => :index
        format.html { redirect_to(subsidies_url, :notice => 'Subsidy was successfully created.') }
        format.xml  { render :xml => @subsidy, :status => :created, :location => @subsidy }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @subsidy.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /subsidies/1
  # PUT /subsidies/1.xml
  def update
    @subsidy = Subsidy.find(params[:id])

    respond_to do |format|
      if @subsidy.update_attributes(params[:subsidy])
   			expire_action :action => :index
        format.html { redirect_to(subsidies_url, :notice => 'Subsidy was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @subsidy.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /subsidies/1
  # DELETE /subsidies/1.xml
  def destroy
    @subsidy = Subsidy.find(params[:id])
    @subsidy.destroy
   	expire_action :action => :index
    respond_to do |format|
      format.html { redirect_to(subsidies_url) }
      format.xml  { head :ok }
    end
  end
end
