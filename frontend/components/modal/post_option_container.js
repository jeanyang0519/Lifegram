import { connect } from 'react-redux';
import PostOption from './post_option';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const msp = (state, ownProps) => {
    debugger
    return ({
        // currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.match.params.postId]
    })
    

};

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(msp, mdp)(PostOption));