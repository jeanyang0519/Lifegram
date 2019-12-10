import * as APISessionUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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
    // debugger
    return APISessionUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
};