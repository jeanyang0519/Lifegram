



json.likes do 
    @likes.each do |like|
        json.set! like.id do 
            json.partial!('like', like: like)
        end
    end 
end