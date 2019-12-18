json.extract! user, :id, :username, :name, :bio, :email, :post_ids, :comment_ids



if user.profile_photo.attached?
    json.profilePhoto url_for(user.profile_photo)
# else 
#     json.profilePhoto ''
end 
