class ProjectsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	#caches_action :index, :show

  def index
  	if params[:institution_id] and @institution = Institution.find(params[:institution_id])
  		@projects = @institution.projects
  	elsif params[:sector_id] and @sector = Sector.find(params[:sector_id])
  		@projects = @sector.projects
  	else
	    @projects = Project.all
		end
	   respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
    end
  end
  
  def show
    @project = Project.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end
end
