class InstitutionGroupsController < ApplicationController
	skip_before_filter :authorize, :only => [:index, :show]
	caches_action :index, :show
	
  # GET /institution_groups
  # GET /institution_groups.xml
  def index
    @institution_groups = InstitutionGroup.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @institution_groups }
    end
  end

  # GET /institution_groups/1
  # GET /institution_groups/1.xml
  def show
    @institution_group = InstitutionGroup.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @institution_group }
    end
  end

end
