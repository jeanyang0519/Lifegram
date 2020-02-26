import { connect } from 'react-redux';
import Footer from './footer';
import { openModal } from '../../actions/modal_actions'


// const msp = state => ({
//     currentUser: state.entities.users[state.session.id]
// });

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default (connect(null, mdp)(Footer));