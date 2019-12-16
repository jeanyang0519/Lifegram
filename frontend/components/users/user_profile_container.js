import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_action';
import UserProfile from './user_profile';
// import { openModal, closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
    debugger
    const user = state.entities.users[ownProps.match.params.id];
    // const posts =  state.entities.posts
    return ({
        user
    })
    // let posts = [];
    // if (user) {
    //     debugger
    //      posts = user.postId.map(id => state.entities.posts[id])
    // } else {
    //     posts = [null];
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