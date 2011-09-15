class InstitutionsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show, :graph]
	#caches_action :index, :show

  def index
		start_year = params[:s] || Date.today.year
		end_year = params[:e] || params[:s] || Date.today.year
  	@start_date = Date.civil(start_year.to_i,1,1)
  	@end_date = Date.civil(end_year.to_i,12,31)
		@institutions = Institution.where(:visible => true)
    respond_to do |format|
 	    format.html do # index.html.erb
 	    	if request.xhr?
 	    		render :partial => "bubble"
 	    	end
 	    end
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
