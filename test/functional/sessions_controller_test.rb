require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  test "should login" do
    steve = users(:one)
    post :create, :name => steve.name, :password => 'secret'
    #assert_redirected_to root_url
    assert_equal steve.id, session[:user_id]
  end

  test "should fail login" do
    steve = users(:one)
    post :create, :name => steve.name, :password => 'wrong'
    assert_redirected_to login_url
  end

  test "should logout" do
  	delete :destroy
  	assert_redirected_to root_url
	end

end
