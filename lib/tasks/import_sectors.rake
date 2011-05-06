namespace :db do
namespace :import do

  desc "Import Sectors from /db/import/sectors.csv"
  task :sectors  => :environment do

		require 'csv'
    CSV.foreach(RAILS_ROOT + "/db/import/sectors.csv") do |row|
      Sector.create(
        :name => row[1],
        :category => row[2]
      )
    end
  end
  
end
end