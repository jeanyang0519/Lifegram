import { connect } from 'react-redux';
import { updatePost, fetchPost, removePost } from '../../actions/post_actions';
import PostShow from './post_show';

const msp = (state, ownProps) => ({
    // post: state.entities.posts[ownProps.match.params.id],
    // currentUser: state.entities.users[post.author_id]

});

const mdp = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    removePost: postId => dispatch(removePost(postId))
    
});

export default connect(msp, mdp)(PostShow);