import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});


export const fetchUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id)
        .then(({user}) => {
    
            dispatch(receiveUser(user))
        }
        );
};


export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(users => {
            
             dispatch(receiveUsers(users)
            )});
};

export const updateUser = id => dispatch => {
    return UserAPIUtil.updateUser(id) 
        .then(( {user} ) => {
            
            dispatch(receiveUser(user))
        });
}

export const updateUserPhoto = (id, data) => dispatch => {
    return UserAPIUtil.updateUserPhoto(id, data)
        .then(({ user }) => {
    
            dispatch(receiveUser(user))
        });
}

