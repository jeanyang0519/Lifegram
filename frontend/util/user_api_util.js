export const fetchUser = id => {
    return $.ajax({
        url: `/api/users/${id}`
    })
}

export const fetchUsers = () => {
    return $.ajax({
        url: `/api/users`
    })
}

export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: {user}
    })
}