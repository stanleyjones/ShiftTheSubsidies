class InstitutionGroupsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	
  def index
    @institution_groups = InstitutionGroup.all
    @institutions = Institution.ungrouped.live
    respond_to do |format|
 	    format.html # index.html.erb
			format.json
   	end
  end

  def show
    @institution_group = InstitutionGroup.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

end
