# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  comment_body :string           not null
#  user_id      :integer          not null
#  post_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
end
