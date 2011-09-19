ShiftTheSubsidies::Application.routes.draw do

	# Static - no login, cached
	
	controller :static do
		get 'index'
		get 'about'
		get 'methodology'
	end

	# Frontend - no login, no editing, cached

  resources :subsidies, :only => ['index','show']
  resources :entities, :only => ['index','show'] do
  	resources :subsidies, :only => :index
  end
  resources :projects, :only => ['index','show'] do
  	get 'sector'
  end
  resources :institutions, :only => ['index','show'] do
  	resources :subsidies, :only => :index
  	resources :projects, :only => :index
  	collection do
  		post 'index'
  	end
  end
  resources :sectors, :only => ['index', 'show'] do
  	resources :projects, :only => :index
  end

	# Logins
	
  resources :users
	controller :sessions do
		get "login" => :new
		post "login" => :create
	end
	match 'logout' => 'sessions#destroy'
  
  # Backend - requires login, editing, not cached
  
	namespace :admin do
		root :to => 'welcome#dashboard'
		get 'clear' => 'welcome'
		resources :subsidies, :institution_groups
		resources :entities do
			resources :subsidies
		end
		resources :institutions do
  		resources :subsidies
  	end
  	resources :projects do
  		resources :subsidies
  	end
  	resources :sectors do
  		resources :projects
  	end
	end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
   root :to => "static#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
