class Admin::InstitutionGroupsController < ApplicationController

	layout 'admin'

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

  # GET /institution_groups/new
  # GET /institution_groups/new.xml
  def new
    @institution_group = InstitutionGroup.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @institution_group }
    end
  end

  # GET /institution_groups/1/edit
  def edit
    @institution_group = InstitutionGroup.find(params[:id])
  end

  # POST /institution_groups
  # POST /institution_groups.xml
  def create
    @institution_group = InstitutionGroup.new(params[:institution_group])

    respond_to do |format|
      if @institution_group.save
        format.html { redirect_to(@institution_group, :notice => 'Institution group was successfully created.') }
        format.xml  { render :xml => @institution_group, :status => :created, :location => @institution_group }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @institution_group.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /institution_groups/1
  # PUT /institution_groups/1.xml
  def update
    @institution_group = InstitutionGroup.find(params[:id])

    respond_to do |format|
      if @institution_group.update_attributes(params[:institution_group])
        format.html { redirect_to(@institution_group, :notice => 'Institution group was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @institution_group.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /institution_groups/1
  # DELETE /institution_groups/1.xml
  def destroy
    @institution_group = InstitutionGroup.find(params[:id])
    @institution_group.destroy

    respond_to do |format|
      format.html { redirect_to(institution_groups_url) }
      format.xml  { head :ok }
    end
  end
end
