import { connect } from 'react-redux';
import { updatePost, fetchPost, removePost } from '../../actions/post_actions';
import PostShow from './post_show';
import { withRouter } from 'react-router';


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
    updatePost: post => dispatch(updatePost(post)),
    removePost: postId => dispatch(removePost(postId))
    
});

export default withRouter(connect(msp, mdp)(PostShow));