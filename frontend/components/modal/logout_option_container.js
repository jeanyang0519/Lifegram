import { connect } from 'react-redux';
import LogoutOption from './logout_option';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(LogoutOption);