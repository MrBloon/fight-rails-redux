require "test_helper"

class Api::V1::EquipmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_equipments_index_url
    assert_response :success
  end
end
