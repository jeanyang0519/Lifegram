import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form'
// import Greeting from './greeting';

// import { openModal } from '../../actions/modal_actions';


const msp = (state) => ({
    // currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'logout'
});


const mdp = (dispatch) => ({
    processForm: () => dispatch(logout()),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    // openModal: modal => dispatch(openModal(modal))

});

export default connect(msp, mdp)(SessionForm);