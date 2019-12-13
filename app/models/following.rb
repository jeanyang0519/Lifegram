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

class Following < ApplicationRecord
    validates :follower_id, presence: :true
    validates :followee_id, presence: :true, uniqueness: {scope: :follower_id}

    belongs_to :follower, 
        class_name: :User, 
        foreign_key: :follower_id

    belongs_to :followee,
        class_name: :User,
        foreign_key: :followee_id
end
