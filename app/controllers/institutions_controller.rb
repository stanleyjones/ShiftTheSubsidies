class InstitutionsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show, :graph]
	#caches_action :show

	layout 'frontend'

  def index
		@institutions = Institution.where(:visible => true)
    respond_to do |format|
 	    format.html do # index.html.erb
 	    	if request.xhr?
 	    		render :partial => "animated_bubbles"
 	    	end
 	    end
      format.json # index.json.erb
   	end
  end

  def show
    @institution = Institution.find(params[:id])
    respond_to do |format|
      format.html
      format.json do
      	@projects = @institution.live_projects
			end
    end
  end
end
