import React from 'react';
import HeaderContainer from '../header/header_container';
import {Redirect} from 'react-router-dom';

class ProfileEdit extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.user;
        this.state = {
            name: this.props.user.name,
            bio: this.props.user.bio
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        
    }
    // not sure
    componentDidMount() {
        debugger
        this.props.fetchUser(this.props.match.params.id);
    }

    handleSubmit(e) {
        // let currentUser = this.props.user;
        let currentUser = { id: this.props.user.id }
        currentUser.name = this.state.name;
        currentUser.bio = this.state.bio;
        e.preventDefault();
        debugger
        this.props.updateUser(currentUser).then(() => {
            debugger
            <Redirect to="/users/:id}"/>
        });

        // this.props.updateUser(this.props.match.params.id);
        // this.props.updateUser(
        //     this.setState({
        //         name: this.state.name,
        //         bio: this.state.bio
        //     })
        // );
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        // debugger
        return (
            <div className="profile-edit-all">
                <div>
                    <HeaderContainer />
                </div>
                <div className="profile-edit-form" onSubmit={this.handleSubmit}>
                    <div>
                        <img className="edit-profile-photo" src={this.props.user.profilePhoto} />
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
                <div className="footer-container">
                    <div className="footer-all">
                        <a className="footer-1" href="https://www.linkedin.com/in/jean-yang-327497156">LINKEDIN</a>
                        <a className="footer-2" href="https://github.com/jeanyang0519">GITHUB</a>
                        <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>

                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileEdit

