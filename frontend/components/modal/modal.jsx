import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostUploadContainer from '../posts/post_upload_container';
import LogoutOptionContainer from './logout_option_container'
import PostOptionContainer from './post_option_container';
// import LogoutFormContainer from '../session/logout_form_container';


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'upload':
            component = <PostUploadContainer />;
            break;
        case 'logoutOption':
            component = <LogoutOptionContainer />;
            break;
        case 'postOption':
            component = <PostOptionContainer/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const msp = state => {
    // debugger
    return {
        modal: state.modal,
        postId: state.ui.currentPostId
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);