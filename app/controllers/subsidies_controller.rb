class SubsidiesController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :index, :show

  # GET /subsidies
  # GET /subsidies.xml
  def index
  	if params[:institution_id] and @institution = Institution.find(params[:institution_id])
  		@subsidies = @institution.subsidies
  	else
	    @subsidies = Subsidy.all
		end
		
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

end