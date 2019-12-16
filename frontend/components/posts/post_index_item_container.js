import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndexItem from './post_index_item';
import { createLike, removeLike } from '../../actions/like_actions';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users
})

const mdp = dispatch => ({
    // fetchPosts: () => (dispatch(fetchPosts()))
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    createLike: (like) => dispatch(createLike(like)),
    removeLike: (id) => dispatch(removeLike(id)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(PostIndexItem);
