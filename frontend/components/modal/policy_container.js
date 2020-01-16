import { connect } from 'react-redux';
import Policy from './policy';
import { closeModal } from '../../actions/modal_actions';


const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mdp)(Policy);