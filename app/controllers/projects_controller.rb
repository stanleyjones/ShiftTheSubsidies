class ProjectsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :show

  def index
		respond_to do |format|
      format.html
      format.json do
				if params[:institution_id] and @institution = Institution.find(params[:institution_id])
  				@projects = @institution.live_projects
  			elsif params[:sector_id] and @sector = Sector.find(params[:sector_id])
  				@projects = @sector.live_projects
  			else
	  		  @projects = Project.live
				end
    	end
    end
  end
  
  def show
    @project = Project.find(params[:id])
    respond_to do |format|
      format.html
    end
  end
end
