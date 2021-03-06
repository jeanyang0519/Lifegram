import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';



const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
    
});

const mdp = dispatch => ({
    createPost: (formData) => dispatch(createPost(formData)),
    closeModal: () => dispatch(closeModal())
});

export default (connect(msp, mdp)(PostForm));