import React from 'react';
import HeaderContainer from '../header/header_container';
import {Redirect} from 'react-router-dom';
import UpdateProfilePhotoContainer from './update_profile_photo_container';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: this.props.user.name,
            bio: this.props.user.bio,
            profilePhoto: this.props.user.profilePhoto
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        
    }
    
    componentDidMount() {
        
        this.props.fetchUser(this.props.match.params.id);
    }

    handleSubmit(e) {
        let currentUser = { id: this.props.user.id }
        currentUser.name = this.state.name;
        currentUser.bio = this.state.bio;
        currentUser.profilePhoto = this.state.profilePhoto
        e.preventDefault();
        
        this.props.updateUser(currentUser)
            .then(
                () => this.props.history.push(`/users/${currentUser.id}/`)
            )


        
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        
        return (
            <div className="profile-edit-all">
                <div>
                    <HeaderContainer />
                </div>
                <div className="profile-edit-form" onSubmit={this.handleSubmit}>
                    <div className="edit-photo">
                        <div>
                            <img className="edit-profile-photo" src={this.props.user.profilePhoto} />
                        </div>
                        <button onClick={() => this.props.openModal('update')} className="">Change Profile Photo</button>
                        
                    </div>
                    <div className="edit-content">
                        <h3 className='edit-title'>Edit Profile</h3>
                        <div >
                            Name
                            <input
                                className="edit-name"
                                type='text'
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </div>
                        <div >
                            Bio
                            <br/>
                            <textarea 
                                className="edit-bio"
                                value={this.state.bio}
                                onChange={this.update('bio')}
                            />
                        </div>
                        <button className="edit-button" onClick={this.handleSubmit}>Update</button>
                    </div>
                </div>
                
                <div className="footer-all">
                    <a href="https://jeanyang0519.github.io/jeanyang0519/" rel="noopener noreferrer" target="_blank">ABOUT ME</a>
                    <a href="https://www.linkedin.com/in/jean-yang-327497156" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
                    <a href="https://github.com/jeanyang0519" rel="noopener noreferrer" target="_blank">GITHUB</a>
                    <a href="https://angel.co/jean-yang-5" rel="noopener noreferrer" target="_blank">ANGEL LIST</a>
                    <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>

                </div>
                
            </div>
        );
    }
}

export default ProfileEdit

