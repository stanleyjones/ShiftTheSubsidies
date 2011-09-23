class ProjectsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :show

  def index
		start_year = params[:s] || START_YEAR
		end_year = params[:e] || params[:s] || END_YEAR
  	@start_date = Date.civil(start_year.to_i,1,1)
  	@end_date = Date.civil(end_year.to_i,12,31)

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
      format.html # show.html.erb
    end
  end
end
