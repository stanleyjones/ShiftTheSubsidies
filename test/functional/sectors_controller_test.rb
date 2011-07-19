require 'test_helper'

class SectorsControllerTest < ActionController::TestCase
  setup do
    @sector = sectors(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:sectors)
  end

  test "should show sector" do
    get :show, :id => @sector.to_param
    assert_response :success
  end

end
