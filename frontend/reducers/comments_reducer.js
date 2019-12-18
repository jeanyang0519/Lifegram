import { merge } from 'lodash';
import { RECEIVE_ALL_COMMENTS, REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions'


const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            // debugger
            return action.comments
        case RECEIVE_COMMENT:
            // debugger
            newState[action.comment.id] = action.comment
            return newState
        case REMOVE_COMMENT:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}

export default commentsReducer;