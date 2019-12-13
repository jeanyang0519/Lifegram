import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/session_actions';
// import SessionForm from './session_form'
// import { openModal, closeModal } from '../../actions/modal_actions';

import Greeting from './greeting';

const msp = (state) => ({
    // currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'logout'
});


const mdp = (dispatch) => ({
    processForm: () => dispatch(logout()),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())

});

export default connect(msp, mdp)(Greeting);