class InstitutionSweeper < ActionController::Caching::Sweeper

	observe Institution
	
	def after_create(institution)
		expire_fragment(institution)
	end
	
	def after_update(institution)
		expire_fragment(institution)
	end
	
	def after_destroy(institution)
		expire_fragment(institution)
	end

end