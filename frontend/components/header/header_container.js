import { connect } from 'react-redux';
import Header from './header';
// import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions'
// import { withRouter } from 'react-router-dom';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    // logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))

});

export default (connect(msp, mdp)(Header));