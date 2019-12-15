


json.post do 
    json.partial!('post', post: @post)
end 

json.photoUrl url_for(@post.photo)