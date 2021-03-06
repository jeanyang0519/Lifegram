export const createLike = like => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: { like }
    });
};

export const removeLike = id => {
    return $.ajax({
        url: `/api/likes/${id}`,
        method: 'DELETE'
    });
};