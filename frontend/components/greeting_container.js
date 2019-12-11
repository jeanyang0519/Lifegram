import { connect } from 'react-redux';
import { logout, signup, clearErrors } from '../actions/session_actions';

import Greeting from './greeting';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'signup'
});


const mdp = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(Greeting);