import { connect } from 'react-redux';
import Footer from './footer';
import { openModal } from '../../actions/modal_actions'


const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

export default (connect(null, mdp)(Footer));