import { fetchAllPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_action';
import { fetchAllComments } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';


const msp = state => ({
    posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments
});

const mdp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchUsers: users => dispatch(fetchUsers(users)),
    fetchAllComments: () => dispatch(fetchAllComments()),
});

export default connect(msp, mdp)(PostIndex); 