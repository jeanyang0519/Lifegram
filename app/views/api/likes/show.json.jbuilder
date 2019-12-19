

json.like do 
    json.partial! 'like', like: @like
end 

# json.post do 
# # debugger
#     json.partial!('/api/posts/post', post: @like.likeable)
# end 


json.set! @like.likeable_type.downcase do 
    if @like.likeable_type == "Post" 
        json.partial!('/api/posts/post', post: @like.likeable)
    elsif @like.likeable_type == "Comment"
        json.partial!('/api/comments/comment', comment: @like.likeable)
    end 
end 