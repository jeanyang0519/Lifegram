import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../actions/session_actions';

const msp = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mdp = (dispatch) => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)((SessionForm));