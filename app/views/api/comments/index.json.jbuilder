
json.comments do 
    @comments.each do |comment|
        json.set! comment.id do
            json.partial!('comment', comment: comment)
            
        end 
    end 
end