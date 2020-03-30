import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = ({like, post}) => ({
    type: RECEIVE_LIKE,
    like,
    post
});

const deleteLike = ({like, post}) => ({
    type: REMOVE_LIKE,
    like,
    post
});

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(payload => dispatch(receiveLike(payload)));
};

export const removeLike = id => dispatch => {
    return LikeAPIUtil.removeLike(id)
        .then(payload => dispatch(deleteLike(payload)));
};