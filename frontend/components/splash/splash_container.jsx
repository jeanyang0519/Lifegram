import { connect } from 'react-redux';
import { logout, signup, clearErrors, login } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';

import Splash from './splash';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'signup'
});


const mdp = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(Splash);