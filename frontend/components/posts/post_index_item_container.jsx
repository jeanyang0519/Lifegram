import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostIdexItem from './post_index_item'


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users
})

const mdp = dispatch => ({
    // fetchPosts: () => (dispatch(fetchPosts()))
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    createLike: (like) => dispatch(createLike(like)),
    removeLike: (id) => dispatch(removeLike(id))
})

export default connect(msp, mdp)(PostIdexItem)