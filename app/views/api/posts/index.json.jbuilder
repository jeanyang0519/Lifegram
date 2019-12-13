
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body
    end 
end 