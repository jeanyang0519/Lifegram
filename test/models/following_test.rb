# == Schema Information
#
# Table name: followings
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class FollowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
