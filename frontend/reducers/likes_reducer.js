import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like
            return newState;
        case REMOVE_LIKE:
            delete newState[action.like.id];
            return newState;
        default:
            return state;
    }
};

export default likesReducer;