import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from 
// import { openModal, closeModal } from '../../actions/modal_actions';

import UserProfile from './user_profile';

const msp = (state) => ({
    
});


const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    
    
});

export default connect(msp, mdp)(UserProfile);