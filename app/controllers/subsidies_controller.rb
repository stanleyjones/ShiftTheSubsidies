class SubsidiesController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]

  def index
		respond_to do |format|
      format.html # index.html.erb
      format.json do
  			if params[:institution_id] and @institution = Institution.find(params[:institution_id])
  				@subsidies = @institution.subsidies.where(:approved => true)
  			elsif params[:entity_id] and @entity = Entity.find(params[:entity_id])
  				@subsidies = @entity.subsidies.where(:approved => true)
  			else
  				@subsidies = Subsidy.all(:include => [:institution,:entity,:project], :conditions => {:approved => true, 'institutions.visible' => true})
  		  end
      end # index.json.erb
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