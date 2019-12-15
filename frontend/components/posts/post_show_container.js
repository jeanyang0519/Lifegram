import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../actions/post_actions';
import PostShow from './post_show';

const msp = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.id];
    const currentUser = state.entities.users[post.author_id];

    return {
        currentUser,
        post
    };
};

const mdp = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post))
    
});

export default connect(msp, mdp)(PostShow);