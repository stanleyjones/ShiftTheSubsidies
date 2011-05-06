namespace :db do
namespace :import do

  desc "Import Subsidies from /db/import/subsidies.csv"
  task :subsidies  => :environment do

		require 'csv'
    CSV.foreach(RAILS_ROOT + "/db/import/subsidies.csv") do |row|
    
    	begin
    		datefmt = Date.strptime(row[4],"%B %d, %Y")
    	rescue
    		datefmt = nil
    	end
    	
    	if institution = Institution.find_by_name(row[5])
    		institution_id = institution.id
    	else
    		institution_id = nil
    	end
    	
    	if entity = Entity.find_by_name(row[6])
    		entity_id = entity.id
    	else
    		entity_id = nil
    	end
    	
    	if project = Project.find_by_name(row[7])
    		project_id = project.id
    	else
    		project_id = nil
    	end
    	
    	Subsidy.create(
        :amount_usd => row[1],
        :amount_original => row[2],
        :currency => row[3],
        :date => datefmt,
        :institution_id => institution_id,
        :entity_id => entity_id,
        :project_id => project_id,
        :kind => row[8],
        :approved => row[9],
        :source => row[10]
      )
    end
  end
  
end
end