class SectorsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]

	layout 'frontend'

  def index
    respond_to do |format|
      format.html # index.html.erb
      format.json do
      	@sectors = Sector.live
			end # index.json.erb
    end
  end

  def show
    @sector = Sector.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json do 
				@projects = @sector.live_projects
			end
    end
  end
end
