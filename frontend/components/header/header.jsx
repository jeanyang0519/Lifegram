import React from "react";
import PostUploadContainer from '../posts/post_upload_container';
// import { openModal } from '../../actions/modal_actions';
import ModalContainer from '../modal/modal';


class Header extends React.Component {
    render() {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        
                            
                            <img className="icon" src={window.icon}/>
                            <img className="headerlogo" src={window.logo} />
                            <img className="add" src={window.add} onClick={() => (this.props.openModal('upload'))} />
                            <img className="profile" src={window.profile}/>
                            <img className="logout" src={window.setting} onClick={() => (this.props.openModal('logout'))}/>
                            <button></button>
                            
                            <ModalContainer />
                            {/* <PostUploadContainer/> */}
                        
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;