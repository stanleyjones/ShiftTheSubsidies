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
	end

end