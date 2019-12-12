# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.destroy_all

user1 = User.create!({
    
    username: "Json",
    password: '123456',
    email: 'json@gmail.com',
    name: 'Json',
    bio: 'woah this a coool keyboard'
})

user2 = User.create!({
    username: "Timmy",
    password: '123456',
    email: 'timmy@gmail.com',
    name: 'Timmy',
    bio: 'I prefer staying in'
})

user3 = User.create!({
    username: "Patrick",
    password: '123456',
    email: 'patrick@gmail.com',
    name: 'Patrick',
    bio: 'beer pong!!!'
})


# testing
# let user11 = {
#     username: "Json1",
#     password: '123456',
#     email: 'json1@gmail.com',
#     name: 'Json',
#     bio: 'woah this a coool keyboard'
# }
