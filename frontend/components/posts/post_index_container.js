import { fetchAllPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';

const msp = state => ({
    posts: state.entities.posts,
    users: state.entities.users
});

const mdp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(msp, mdp)(PostIndex); 