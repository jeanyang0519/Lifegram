import { connect } from 'react-redux';
import ShowOption from './show_option';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';


const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(null, mdp)(ShowOption));