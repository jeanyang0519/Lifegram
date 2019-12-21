import { merge } from 'lodash';
import { RECEIVE_ALL_POSTS, REMOVE_POST, RECEIVE_POST } from '../actions/post_actions'
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';



const postsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState
        case REMOVE_POST:
            delete newState[action.postId]
            return newState
        case RECEIVE_LIKE:
            // debugger

            newState[action.post.id] = action.post
            return newState;
        case REMOVE_LIKE:
            // debugger
            newState[action.post.id] = action.post
            return newState
        case RECEIVE_COMMENT:

            // newState[action.comment.id] = action.comment
            newState[action.comment.post_id].comment_ids.push(action.comment.id);
            return newState
        case REMOVE_COMMENT:
            delete newState[action.comment.id]
            return newState
        default:
            return state
    }
}

export default postsReducer;