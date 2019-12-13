export const fetchAllPosts = (posts) => (
    $.ajax({
        url: "/api/posts/",
        data: {posts}
    })
);

export const fetchPost = postId => (
    $.ajax({
        url: `/api/posts/${postId}/`
    })
);

export const createPost = post => (
    $.ajax({
        url: `/api/posts/`,
        method: 'POST',
        data: { post },
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