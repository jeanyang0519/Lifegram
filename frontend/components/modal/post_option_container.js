import { connect } from 'react-redux';
import PostOption from './post_option';
import { closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId]

});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(PostOption);