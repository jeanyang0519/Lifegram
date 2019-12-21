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

const receiveComment = ({comment, post}) => ({
    type: RECEIVE_COMMENT,
    comment,
    post
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
        .then(payload => (dispatch(receiveComment(payload))))
};


export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(payload => dispatch(receiveComment(payload)))
        
};
    
export const createComment = comment => dispatch => {
    
    return CommentAPIUtil.createComment(comment)
        .then(payload => dispatch(receiveComment(payload)))       
};

export const removeComment = id => dispatch => {
    return CommentAPIUtil.deleteComment(id)
        .then(() => dispatch(deleteComment(id)));
};