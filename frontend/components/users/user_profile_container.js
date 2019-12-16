import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_action';
import { fetchAllPosts } from '../../actions/post_actions';
import UserProfile from './user_profile';
// import { openModal, closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
    
    const user = state.entities.users[ownProps.match.params.id];
    
    let posts = [];
    if (user) {
        debugger
         posts = user.post_ids.map(id => state.entities.posts[id])
    } else {
        posts = [null];
    }

    return ({
        user,
        posts
    })
};


const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(UserProfile);