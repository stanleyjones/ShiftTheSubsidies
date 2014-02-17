class InstitutionsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show, :graph]

  def index
    respond_to do |format|
 	    format.html
 	    format.json do
				if params[:institution_group_id] and @institution_group = InstitutionGroup.find(params[:institution_group_id])
  				@institutions = @institution_group.institutions
  			else
	  		  @institutions = Institution.live
				end
			end
      format.csv { render :csv => Institution.live, :filename => 'institutions' }
   	end
  end

  def show
    @institution = Institution.find(params[:id])
    respond_to do |format|
      format.html
      format.json do
      	# @projects = @institution.live_projects
			end
    end
  end
end
