import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALLCOMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveAllComments = (comments) => {
    
    return ({
        type: RECEIVE_ALL_COMMENTS,
        comments
    })
};

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const deleteComment = id => ({
    type: REMOVE_COMMENT,
    id
});



export const fetchAllComments = () => dispatch => {
    return CommentAPIUtil.fetchAllComments()
        .then(comments => dispatch(receiveAllComments(comments)))
};

export const fetchComment = id => dispatch => {

    return CommentAPIUtil.fetchComment(id)
        .then(comment => (dispatch(receiveComment(comment))))
};


export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        
};
    
export const createComment = comment => dispatch => {
    // debugger
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))       
};

export const removeComment = id => dispatch => {
    return CommentAPIUtil.deleteComment(id)
        .then(() => dispatch(deleteComment(id)));
};