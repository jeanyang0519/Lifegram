json.extract! user, :id, :username, :name, :bio, :email
if user.profile_photo.attached?
    json.profilePhoto url_for(user.profile_photo)
else 
    json.profilePhoto '/images/italy.png'
end 
