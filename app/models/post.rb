# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  location   :string
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :author_id, presence: :true
    has_one_attached :photo
    belongs_to :user, class_name: :User
    has_many :comments
    has_many :likes
end 
