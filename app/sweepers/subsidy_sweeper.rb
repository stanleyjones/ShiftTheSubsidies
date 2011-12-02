class SubsidySweeper < ActionController::Caching::Sweeper

	observe Subsidy
	
	def after_create(subsidy)
		expire_cache(subsidy)
	end
	
	def after_update(subsidy)
		expire_cache(subsidy)
	end
	
	def after_destroy(subsidy)
		expire_cache(subsidy)
	end
	
	private
	
	def expire_cache(subsidy)
	
		expire_fragment(:controller => "/subsidies", :action => "index")
		expire_fragment(subsidy)

		expire_fragment(:controller => "/institutions", :action => "index")
		expire_fragment(subsidy.institution)

		expire_fragment(:controller => "/entities", :action => "index")
		expire_fragment(subsidy.entity)

		expire_fragment(:controller => "/projects", :action => "index")
		expire_fragment(subsidy.project)

		expire_fragment(:controller => "/sectors", :action => "index")
		expire_fragment(subsidy.project.sector)

		expire_action :controller => "/static", :action => "index"
		expire_action :controller => "/admin/welcome", :action => "dashboard"
	end

end