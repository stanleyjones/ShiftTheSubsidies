class InstitutionsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	#caches_action :index, :show

  def index
		@institutions = Institution.where(:visible => true)
    respond_to do |format|
 	    format.html # index.html.erb
      format.json # index.json.erb
   	end
  end

  def show
    @institution = Institution.find(params[:id])
   	@subsidies = []
   	@institution.subsidies.each do |subsidy|
    	if subsidy.valid? then @subsidies << subsidy; end
    end
    @projects = @institution.projects
    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end
end
