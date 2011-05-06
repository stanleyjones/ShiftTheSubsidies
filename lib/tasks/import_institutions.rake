namespace :db do
namespace :import do

  desc "Import Institutions from /db/import/institutions.csv"
  task :institutions  => :environment do

		require 'csv'
    CSV.foreach(RAILS_ROOT + "/db/import/institutions.csv") do |row|
      Institution.create(
        :name => row[1],
        :abbreviation => row[2],
        :kind => row[3],
        :fiscal_year => row[4],
        :visible => row[5]
      )
    end
  end
  
end
end