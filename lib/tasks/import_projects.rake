namespace :db do
namespace :import do

  desc "Import Projects from /db/import/projects.csv"
  task :projects  => :environment do

		require 'csv'
    CSV.foreach(RAILS_ROOT + "/db/import/projects.csv", :encoding => "utf-8") do |row|
    
    	if sector = Sector.find_by_name(row[7])
    		sector_id = sector.id
    	else
    		sector_id = nil
    	end
    	
      Project.create(
        :name => row[1],
        :country => row[2],
        :description => row[3],
        :notes => row[4],
        :tags => row[5],
        :identifier => row[6],
        :sector_id => sector_id
      )
    end
  end
  
end
end