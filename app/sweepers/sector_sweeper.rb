class SectorSweeper < ActionController::Caching::Sweeper

	observe Sector
	
	def after_create(sector)
		expire_cache(sector)
	end
	
	def after_update(sector)
		expire_cache(sector)
	end
	
	def after_destroy(sector)
		expire_cache(sector)
	end
	
	private
	
	def expire_cache(sector)
		expire_fragment(sector)
	end

end