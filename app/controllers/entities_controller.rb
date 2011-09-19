class EntitiesController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]

  def index
    respond_to do |format|
      format.html
      format.json do
				@entities = Entity.live
			end
    end
  end

  def show
    @entity = Entity.find(params[:id])
		@subsidies = @entity.subsidies.live
    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end

end
