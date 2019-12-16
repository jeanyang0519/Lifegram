import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS'

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = ({post, user}) => ({
    type: RECEIVE_POST,
    post,
    user
});

const deletePost = postId => ({
    type: REMOVE_POST,
    postId
});

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});


export const fetchAllPosts = () => dispatch => {
    return PostAPIUtil.fetchAllPosts()
        .then(
            posts => dispatch(receiveAllPosts(posts)),
            error => dispatch(receivePostErrors(error.responseJSON))
        )
};

export const fetchPost = postId => dispatch => {
    
    return PostAPIUtil.fetchPost(postId)
        .then(
            
            post => {
                
                dispatch(receivePost(post))
            },
            
            error => dispatch(receivePostErrors(error.responseJSON))
        )
};

export const removePost = postId => dispatch => {
    return PostAPIUtil.deletePost(postId)
        .then(() => dispatch(deletePost(postId)));
};

export const updatePost = post => dispatch => {
    return PostAPIUtil.updatePost(post)
        .then(
            post => dispatch(receivePost(post)),
            error => dispatch(receivePostErrors(error.responseJSON))
        )
        
};

export const createPost = post => dispatch => {
    // debugger
    return PostAPIUtil.createPost(post)
        .then(
            post => dispatch(receivePost(post)),
            error => dispatch(receivePostErrors(error.responseJSON))
        )
        
};