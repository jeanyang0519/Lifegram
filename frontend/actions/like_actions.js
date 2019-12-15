import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const deleteLike = like => ({
    type: REMOVE_LIKE,
    like
});

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(newLike => dispatch(receiveLike(newLike)));
};

export const removeLike = id => dispatch => {
    return LikeAPIUtil.removeLike(id)
        .then(() => dispatch(deleteLike(id)));
};