require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get recirc" do
    get static_pages_recirc_url
    assert_response :success
  end

end
