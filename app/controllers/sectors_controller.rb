class SectorsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :index, :show

  # GET /sectors
  # GET /sectors.xml
  def index
    @sectors = Sector.all

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
      format.xml  { render :xml => @sectors }
    end
  end

  # GET /sectors/1
  # GET /sectors/1.xml
  def show
    @sector = Sector.find(params[:id])
    @projects = @sector.projects

    respond_to do |format|
      format.html # show.html.erb
      format.json # index.json.erb
      format.xml  { render :xml => @sector }
    end
  end
end
