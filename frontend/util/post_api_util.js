export const fetchAllPosts = () => (
    $.ajax({
        url: "/api/posts/"
        
    })
);

export const fetchPost = postId => (
    $.ajax({
        url: `/api/posts/${postId}/`
    })
);

export const createPost = formData => (
    $.ajax({
        url: `/api/posts/`,
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updatePost = post => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'patch',
        data: { post }
    })
);

export const deletePost = postId => (
    $.ajax({
        url: `/api/posts/${postId}/`,
        method: 'DELETE'
    })
)


