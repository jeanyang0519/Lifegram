import * as APISessionUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    });
};

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    });
};

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const login = user => dispatch => {
    return (
        APISessionUtil.login(user)
            .then(
                user => dispatch(receiveCurrentUser(user)),
                error => dispatch(receiveErrors(error.responseJSON))
            )
    );
};

export const logout = () => dispatch => (
    APISessionUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => {
    
    return APISessionUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
};