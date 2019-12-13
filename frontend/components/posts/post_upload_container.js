import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({
    createPost: (formData, id) => dispatch(createPost(formData, id)),
    closeModal: () => dispatch(closeModal())
});

export default (connect(msp, mdp)(PostForm));