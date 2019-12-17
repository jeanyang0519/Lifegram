// import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_action';
// import { merge } from 'lodash';
// import { RECEIVE_CURRENT_POST } from '../actions/post_actions'; 
import { OPEN_MODAL } from '../actions/modal_actions';

const currentPostReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            // debugger
            return action.postId;
        default:
            return state;
    }
};

export default currentPostReducer;