class SubsidiesController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	#caches_action :index, :show

  def index
  	# [TODO] Two seperate methods, for caching purposes
  	if params[:institution_id] and @institution = Institution.find(params[:institution_id])
  		@subsidies = @institution.subsidies.where(:approved => true)
  	elsif params[:entity_id] and @entity = Entity.find(params[:entity_id])
  		@subsidies = @entity.subsidies.where(:approved => true)
  	else
  		@subsidies = []
   		Subsidy.where(:approved => true).each do |subsidy|
	    	if subsidy.valid? then @subsidies << subsidy; end
  		end
    end
		respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
    end
  end

  def show
    @subsidy = Subsidy.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end

end