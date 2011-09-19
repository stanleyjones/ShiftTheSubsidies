class EntitySweeper < ActionController::Caching::Sweeper

	observe Entity
	
	def after_create(entity)
		expire_cache(entity)
	end
	
	def after_update(entity)
		expire_cache(entity)
	end
	
	def after_destroy(entity)
		expire_cache(entity)
	end
	
	private
	
	def expire_cache(entity)
		expire_fragment(entity)
		expire_action :controller => "/admin/welcome", :action => "dashboard"
	end

end