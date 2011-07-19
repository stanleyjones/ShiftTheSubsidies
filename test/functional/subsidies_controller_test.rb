require 'test_helper'

class SubsidiesControllerTest < ActionController::TestCase
  setup do
    @subsidy = subsidies(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:subsidies)
  end

  test "should show subsidy" do
    get :show, :id => @subsidy.to_param
    assert_response :success
  end

end
