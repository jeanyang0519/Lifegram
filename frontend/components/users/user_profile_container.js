import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_action';
import UserProfile from './user_profile';
// import { openModal, closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.id];
    // debugger
    return ({
        user
    })
    // const posts;

    // if (user) {
    //     posts = user.postId.map(id => state.entities.posts[id])
    // } else {
    //     posts = [undefined];
    // }

    // return ({
    //     user,
    //     posts
    // })
};


const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(UserProfile);