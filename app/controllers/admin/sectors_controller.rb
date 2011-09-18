class Admin::SectorsController < ApplicationController
	
	layout 'admin'
	cache_sweeper :sector_sweeper, :only => [:create, :update, :destroy]
	
  def index
    respond_to do |format|
      format.html
      format.json { @sectors = Sector.all }
    end
  end

  def show
    @sector = Sector.find(params[:id])
    @projects = @sector.projects

    respond_to do |format|
      format.html # show.html.erb
      format.json # index.json.erb
    end
  end

  def new
    @sector = Sector.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @sector }
    end
  end

  # GET /sectors/1/edit
  def edit
    @sector = Sector.find(params[:id])
    @sector.valid?
  end

  # POST /sectors
  # POST /sectors.xml
  def create
    @sector = Sector.new(params[:sector])

    respond_to do |format|
      if @sector.save
      	expire_action :action => :index
        format.html { redirect_to([:admin, @sector], :notice => 'Sector was successfully created.') }
        format.xml  { render :xml => @sector, :status => :created, :location => @sector }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @sector.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /sectors/1
  # PUT /sectors/1.xml
  def update
    @sector = Sector.find(params[:id])

    respond_to do |format|
      if @sector.update_attributes(params[:sector])
      	expire_action :action => :index
        format.html { redirect_to([:admin, @sector], :notice => 'Sector was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @sector.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /sectors/1
  # DELETE /sectors/1.xml
  def destroy
    @sector = Sector.find(params[:id])
    @sector.destroy
   	expire_action :action => :index
    respond_to do |format|
      format.html { redirect_to(admin_sectors_url) }
      format.xml  { head :ok }
    end
  end
end
