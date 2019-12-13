# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all



user1 = User.create!({
    id: 1,
    username: "Timmy",
    password: '123456',
    email: 'timmy@gmail.com',
    name: 'Timmy',
    bio: 'I prefer staying in'
})

user2 = User.create!({
    id: 2,
    username: "Patrick",
    password: '123456',
    email: 'patrick@gmail.com',
    name: 'Patrick',
    bio: 'beer pong!!!'
})

user3 = User.create!({
    id: 3,
    username: "Json",
    password: '123456',
    email: 'json@gmail.com',
    name: 'Json',
    bio: 'woah this a coool keyboard'
})

post1 = Post.create!({
    location: "Chicago",
    body: "Can we go back inside?",
    author_id: 1
})

post2 = Post.create!({
    location: "Canada",
    body: "Chilling",
    author_id: 2
})




