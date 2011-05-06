namespace :db do
namespace :import do

  desc "Import Entities from /db/import/entities.csv"
  task :entities  => :environment do

		require 'csv'
    CSV.foreach(RAILS_ROOT + "/db/import/entities.csv") do |row|
      Entity.create(
        :name => row[1],
        :kind => row[2]
      )
    end
  end
  
end
end