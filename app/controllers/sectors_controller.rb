class SectorsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
#	caches_action :index, :show

  def index
    @sectors = Sector.all

    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
    end
  end

  def show
    @sector = Sector.find(params[:id])
    @projects = @sector.projects

    respond_to do |format|
      format.html # show.html.erb
      format.json # index.json.erb
    end
  end
end
