import { connect } from 'react-redux';
import EditProfileOption from './edit_profile_option';

import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({

    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(EditProfileOption);