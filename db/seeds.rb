# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all

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
    location: "Chicago",
    body: "Can we go back inside?",
    author_id: 2
})

post2 = Post.create!({
    id:2,
    location: "Canada",
    body: "Chilling",
    author_id: 3
})

post3 = Post.create!({
    id: 3,
    location: 'New York',
    body: "Chilling in the sunshine",
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

file1 = open('https://lifegram-seeds.s3.amazonaws.com/profile1.jpg')
user1.profile_photo.attach(io: file1, filename: 'profile1.jpg')

file2 = open('https://lifegram-seeds.s3.amazonaws.com/ny1.jpg')
post3.photo.attach(io: file2, filename: 'ny1.jpg')







