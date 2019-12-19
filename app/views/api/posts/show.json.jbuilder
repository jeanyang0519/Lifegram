json.post do 
    json.partial!('post', post: @post)
end 

json.user do
    json.partial!('/api/users/user', user: @post.user)
end 

# something worng here
# json.comment do 
# debugger
#     json.partial!('/api/comments/comment', comment: @comment.comment)
# end 



