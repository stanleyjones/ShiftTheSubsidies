class InstitutionsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :index, :show

  # GET /institutions
  # GET /institutions.xml
  def index
  	if @user
	    @institutions = Institution.all # Admins get all of them
		else
			@institutions = Institution.where(:visible => true)
		end
    respond_to do |format|
 	    format.html # index.html.erb
      format.json # index.json.erb
   	  format.xml  { render :xml => @institutions }
   	end
  end

  # GET /institutions/1
  # GET /institutions/1.xml
  def show
    @institution = Institution.find(params[:id])
    if @user
    	@subsidies = @institution.subsidies # Admins get all of them
    else
    	@subsidies = []
    	@institution.subsidies.each do |subsidy|
	    	if subsidy.valid? then @subsidies << subsidy; end
	    end
    end

    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
      format.xml  { render :xml => @institution }
    end
  end
end
