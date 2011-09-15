class EntitiesController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	#caches_action :index, :show

  def index
    @entities = Entity.all

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
    end
  end

  def show
    @entity = Entity.find(params[:id])
		@subsidies = @entity.subsidies
    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end

end
