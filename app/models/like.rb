# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, presence: :true
    validates :likeable_type, presence: :true
    validates :likeable_id, presence: :true

    belongs_to :likeable, polymorphic: true
end
