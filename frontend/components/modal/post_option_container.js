import { connect } from 'react-redux';
import PostOption from './post_option';
import { closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => ({
    // post: state.posts[ownProps.match.params.postId],
    // currentUser: state.entities.users[post.author_id]

    // currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(PostOption);