import { connect } from 'react-redux';
import { updateUserPhoto } from '../../actions/user_action';
import { closeModal } from '../../actions/modal_actions';
import UpdateProfilePhoto from './update_profile_photo';

const msp = (state) => {

    return ({

        user: state.entities.users[state.session.id]
        
    })

};
const mdp = dispatch => ({
    updateUserPhoto: (id, data) => dispatch(updateUserPhoto(id, data)),
    closeModal: () => dispatch(closeModal())
});



export default connect(msp, mdp)(UpdateProfilePhoto);
