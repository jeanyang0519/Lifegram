
export const createComment = comment => (
    $.ajax({
        url: `/api/comments/`,
        method: 'POST',
        data: {comment}
        
    })
);

export const updateComment = comment => (
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'PATCH',
        data: { post }
    })
);

export const deleteComment = id => (
    $.ajax({
        url: `/api/comments/${id}/`,
        method: 'DELETE'
    })
)



export const fetchAllComments = () => (
    $.ajax({
        url: "/api/comments/"

    })
);

export const fetchComment = id => (
    $.ajax({
        url: `/api/comments/${id}/`
    })
);
