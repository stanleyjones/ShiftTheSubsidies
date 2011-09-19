class ProjectSweeper < ActionController::Caching::Sweeper

	observe Project
	
	def after_create(project)
		expire_cache(project)
	end
	
	def after_update(project)
		expire_cache(project)
	end
	
	def after_destroy(project)
		expire_cache(project)
	end
	
	private
	
	def expire_cache(project)
		expire_action(:controller => "/projects", :action => "show")
		expire_fragment(project)
		expire_action :controller => "/admin/welcome", :action => "dashboard"
	end

end