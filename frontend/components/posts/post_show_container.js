import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostShow from './post_show';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_action';


const msp = (state, ownProps) => {
    const post =  state.entities.posts[ownProps.match.params.id]
    const currentUser = post ? state.entities.users[post.author_id] : null
    
    return ({
        post,
        currentUser
    })
};

const mdp = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(msp, mdp)(PostShow));