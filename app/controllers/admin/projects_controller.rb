class Admin::ProjectsController < ApplicationController
	
	layout 'admin'

  def index
  	if params[:sector_id] and @sector = Sector.find(params[:sector_id])
  		@projects = @sector.projects
  	else
	    @projects = Project.all
		end
		
    respond_to do |format|
      format.html # index.html.erb
      format.json # index.json.erb
    end
  end

  def show
    @project = Project.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  def new
    @project = Project.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(params[:project])

    respond_to do |format|
      if @project.save
      	expire_action :action => :index
        format.html { redirect_to([:admin, @project], :notice => 'Project was successfully created.') }
      else
        format.html { render :action => "new" }
      end
    end
  end

  def update
    @project = Project.find(params[:id])

    respond_to do |format|
      if @project.update_attributes(params[:project])
      	expire_action :action => :index
        format.html { redirect_to([:admin, @project], :notice => 'Project was successfully updated.') }
      else
        format.html { render :action => "edit" }
      end
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
		expire_action :action => :index
    respond_to do |format|
      format.html { redirect_to(admin_projects_url) }
    end
  end
end
