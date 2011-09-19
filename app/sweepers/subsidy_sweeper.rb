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
		expire_fragment(subsidy)
		expire_action :controller => "/static", :action => "index"

		expire_action :controller => "/institutions", :action => "show", :id => subsidy.institution_id
		expire_action :controller => "/entities", :action => "show", :id => subsidy.entity_id
		expire_action :controller => "/projects", :action => "show", :id => subsidy.project_id

		expire_action :controller => "/admin/welcome", :action => "dashboard"
	end

end