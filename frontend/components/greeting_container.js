import { connect } from 'react-redux';
import { logout, signup } from '../actions/session_actions';

import Greeting from './greeting';
//errors is from signup form container
const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'signup'
});


const mdp = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);