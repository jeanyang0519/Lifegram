json.extract! post, :id, :body, :location, :author_id, :created_at
json.photoUrl url_for(post.photo) if post.photo.attached?
