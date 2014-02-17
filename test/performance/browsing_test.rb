require 'test_helper'
require 'rails/performance_test_help'

# Profiling results for each test method are written to tmp/performance.
class BrowsingTest < ActionDispatch::PerformanceTest
  def test_homepage
    get '/'
  end
  def test_aboutpage
  	get '/guide'
  end
  def test_methodologypage
  	get '/methodology'
  end
end
