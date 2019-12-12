import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    errors: state.errors.posts,
    post: {
        location: '',
        body: '',
        photo: null
    }

})

const mdp = dispatch => ({
    action: post => dispatch(createPost(post))
});

export default withRouter(connect(msp, mdp)(PostForm));