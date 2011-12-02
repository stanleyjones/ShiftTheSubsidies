class InstitutionSweeper < ActionController::Caching::Sweeper

	observe Institution
	
	def after_create(institution)
		expire_cache(institution)
	end
	
	def after_update(institution)
		expire_cache(institution)
	end
	
	def after_destroy(institution)
		expire_cache(institution)
	end

	private
	
	def expire_cache(institution)
		expire_fragment(:controller => "/institutions", :action => "show", :id => institution)
		expire_action :controller => "/institutions", :action => "show", :id => institution
		expire_action :controller => "/admin/welcome", :action => "dashboard"
	end

end