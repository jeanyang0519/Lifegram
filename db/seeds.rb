# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Comment.destroy_all
Like.destroy_all
Post.destroy_all
User.destroy_all

user1 = User.create!({
    id: 1, 
    username: "Jean",
    password: '123456',
    email: 'jean@gmail.com',
    name: 'Jean',
    bio: 'Nature lover'
})

user2 = User.create!({
    id: 2,
    username: "Timmy",
    password: '123456',
    email: 'timmy@gmail.com',
    name: 'Timmy',
    bio: 'I prefer staying in'
})

user3 = User.create!({
    id: 3,
    username: "Patrick",
    password: '123456',
    email: 'patrick@gmail.com',
    name: 'Patrick',
    bio: 'beer pong!!!'
})

user4 = User.create!({
    id: 4,
    username: "Json",
    password: '123456',
    email: 'json@gmail.com',
    name: 'Json',
    bio: 'woah this a coool keyboard'
})

post1 = Post.create!({
    id: 1,
    location: "Hawaii",
    body: "Let me go back to Hawaii",
    author_id: 1
})

post2 = Post.create!({
    id:2,
    location: "Canada",
    body: "Real nature bud",
    author_id: 3
})

post3 = Post.create!({
    id: 3,
    location: 'New York',
    body: "Chilling in the sunshine",
    author_id: 1
})

post4 = Post.create!({
    id: 4,
    location: 'Hawaii',
    body: "I miss hiking a lot.",
    author_id: 1
})

like1 = Like.create!({
    user_id: 1,
    likeable_type: 'Post',
    likeable_id: post1.id
})

like2 = Like.create!({
    user_id: 2,
    likeable_type: 'Post',
    likeable_id: post2.id
})

like3 = Like.create!({
    user_id: 3,
    likeable_type: 'Post',
    likeable_id: post3.id
})

profile1 = open('https://lifegram-seeds.s3.amazonaws.com/profile1.jpg')
user1.profile_photo.attach(io: profile1, filename: 'profile1.jpg')

profile2 = open('https://lifegram-seeds.s3.amazonaws.com/timmy.jpg')
user2.profile_photo.attach(io: profile2, filename: 'timmy.jpg')

profile3 = open('https://lifegram-seeds.s3.amazonaws.com/patrick.jpg')
user3.profile_photo.attach(io: profile3, filename: 'patrick.jpg')

file2 = open('https://lifegram-seeds.s3.amazonaws.com/ny1.jpg')
post3.photo.attach(io: file2, filename: 'ny1.jpg')

file3 = open('https://lifegram-seeds.s3.amazonaws.com/hawaii1.jpg')
post1.photo.attach(io: file3, filename: 'hawaii1.jpg')

file4 = open('https://lifegram-seeds.s3.amazonaws.com/canada1.jpg')
post2.photo.attach(io: file4, filename: 'canada1.jpg')

file5 = open('https://lifegram-seeds.s3.amazonaws.com/hawaii3.jpg')
post4.photo.attach(io: file5, filename: 'hawaii3.jpg')

comment1 = Comment.create!({
    comment_body: "sooo beautilful!!",
    post_id: post1.id,
    user_id: user1.id
})

comment2 = Comment.create!({
    comment_body: "cool",
    post_id: post1.id,
    user_id: user2.id
})

comment3 = Comment.create!({
    comment_body: "We should go hiking sooon!",
    post_id: post2.id,
    user_id: user1.id
})

comment4 = Comment.create!({
    comment_body: "Classic",
    post_id: post3.id,
    user_id: user2.id
})






