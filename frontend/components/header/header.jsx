import React from "react";
// import PostUploadContainer from '../posts/post_upload_container';
// import { openModal } from '../../actions/modal_actions';
import ModalContainer from '../modal/modal';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="headerLeft">
                    <Link to="/">
                        <img className="icon" src={window.icon} />
                    </Link>
                    <div className="horizontalLine"></div>
                    <Link to="/">
                        <img className="headerlogo" src={window.logo} />
                    </Link>
                </div>
                    
                        
                        
                <div className="headerRight">
                    {/* <img className="policy" src={window.plane} onClick={() => (this.props.openModal('policy'))} /> */}
                    <img className="add" src={window.add} onClick={() => (this.props.openModal('upload'))} />
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <img className="profile" src={window.profile}/>
                    </Link>
                    <img className="logout" src={window.setting} onClick={() => (this.props.openModal('logoutOption'))}/>
                    <ModalContainer />
                </div>       
                 
                
            </div>
        )
    }
}
export default Header;