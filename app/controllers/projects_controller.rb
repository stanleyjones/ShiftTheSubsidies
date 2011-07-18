class ProjectsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :index, :show

  # GET /projects
  # GET /projects.xml
  def index
    @projects = Project.all
	   respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
      format.xml  { render :xml => @projects }
    end
  end
  
  def sector
  	if params[:sector_id] and @sector = Sector.find(params[:sector_id])
  		@projects = @sector.projects
  	else
  		@projects = Projects.all
  	end
  end
  
  # GET /projects/1
  # GET /projects/1.xml
  def show
    @project = Project.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @project }
    end
  end
end
