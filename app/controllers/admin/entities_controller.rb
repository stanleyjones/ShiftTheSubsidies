class Admin::EntitiesController < ApplicationController

	layout 'admin'
	# cache_sweeper :entity_sweeper, :only => [:create, :update, :destroy]

  def index
    respond_to do |format|
      format.html
      format.json { @entities = Entity.all }
    end
  end

  def show
    @entity = Entity.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json # show.json.erb
    end
  end

  def new
    @entity = Entity.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def edit
    @entity = Entity.find(params[:id])
    @entity.valid?
  end

  def create
    @entity = Entity.new(params[:entity])

    respond_to do |format|
      if @entity.save
        format.html { redirect_to(admin_root_url, :notice => 'Entity was successfully created.') }
      else
        format.html { render :action => "new" }
      end
    end
  end

  def update
    @entity = Entity.find(params[:id])

    respond_to do |format|
      if @entity.update_attributes(params[:entity])
        format.html { redirect_to(admin_root_url, :notice => 'Entity was successfully updated.') }
      else
        format.html { render :action => "edit" }
      end
    end
  end

  def destroy
    @entity = Entity.find(params[:id])
    @entity.destroy
    respond_to do |format|
      format.html { redirect_to(admin_root_url) }
    end
  end
end
