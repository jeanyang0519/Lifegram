


json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial!('post', post: post)
            
        end 
    end 
end



json.likes do 
    @likes.each do |like|
        json.set! like.id do 
            json.partial!('/api/likes/like', like: like)
        end
    end 
end
