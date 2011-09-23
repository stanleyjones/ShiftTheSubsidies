class SectorsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]

  def index
		start_year = params[:s] || START_YEAR
		end_year = params[:e] || params[:s] || END_YEAR
  	@start_date = Date.civil(start_year.to_i,1,1)
  	@end_date = Date.civil(end_year.to_i,12,31)

    respond_to do |format|
      format.html # index.html.erb
      format.json do
      	@sectors = Sector.live
			end # index.json.erb
    end
  end

  def show
		start_year = params[:s] || START_YEAR
		end_year = params[:e] || params[:s] || END_YEAR
  	@start_date = Date.civil(start_year.to_i,1,1)
  	@end_date = Date.civil(end_year.to_i,12,31)

    @sector = Sector.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json do 
				@projects = @sector.projects.live
			end
    end
  end
end
