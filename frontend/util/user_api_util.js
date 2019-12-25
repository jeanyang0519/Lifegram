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

export const updateUser = id => {
    return $.ajax({
        url: `/api/users/${id}`,
        data: {id}
    })
}