source 'http://rubygems.org'

gem 'rails', '= 3.1.11'
gem 'jquery-rails'
gem 'json_pure'

# Caching
gem 'dalli'

# Countries
gem 'carmen'

# Currency conversions
gem 'money'
gem 'google_currency'

# Asset pipeline
group :assets do
  gem 'sass-rails',   "~> 3.1.5"
  gem 'coffee-rails', "~> 3.1.1"
  gem 'uglifier',     ">= 1.0.3"
end

group :test do
	gem 'sqlite3-ruby', :require => 'sqlite3'
end

group :development do
	gem 'mysql2'
	gem 'ruby-prof'

	# Deploy to Heroku
	gem 'heroku'
	gem 'taps'
end
