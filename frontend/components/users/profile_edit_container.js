import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { updateUser, fetchUser } from '../../actions/user_action';
import { closeModal, openModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
    
    return ({

        user: state.entities.users[ownProps.match.params.id],
    })
    // currentUser: state.entities.users[state.session.id]

};

const mdp = dispatch => {
    
    return ({
        updateUser: (id) => dispatch(updateUser(id)),
        fetchUser: id => dispatch(fetchUser(id)),
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal))
    })
    
};

export default (connect(msp, mdp)(ProfileEdit));