import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PostIdex from './post_index'


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users
})

const mdp = dispatch => ({
    fetchPosts: () => (dispatch(fetchPosts()))
})

export default connect(msp, mdp)(PostIdex)