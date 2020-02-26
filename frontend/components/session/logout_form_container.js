import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form'



const msp = (state) => ({
    errors: state.errors.session,
    formType: 'logout'
});


const mdp = (dispatch) => ({
    processForm: () => dispatch(logout()),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(SessionForm);