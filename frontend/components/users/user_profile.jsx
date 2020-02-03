import React from 'react';
import HeaderContainer from '../header/header_container';
import UserProfileItem from './user_profile_item';
import { Link } from 'react-router-dom'



class UserProfile extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            _isMounted: false,
            loaded: false
        }
        this.renderPosts = this.renderPosts.bind(this)

        this.renderEdit = this.renderEdit.bind(this)
    }

    componentDidMount() {
        this.state._isMounted = true;
        this.props.fetchAllPosts()
            .then(() => {
                this.setState({ loaded: true })
            });  

        if (this.props.user === undefined) {
            this.props.fetchUsers()
        }
    }

    



    renderEdit() {
        
        if (this.props.user.id === this.props.currentUser.id) {
            return (
                <div className="edit-profile-button">
                    <Link to={`/users/${this.props.user.id}/edit`} className="edit-link">Edit Profile</Link>
                </div>
            )
        } else {
            return null
        }
    }

    renderPosts() {
        if (this.props.posts.length === 0) {
            return (
                <div className="zero-post">
                    <img src={window.camera}/>
                    <p>Upload a photo</p>
                    <p> Share with your friends </p>
                </div>
            )
        } else {
            return (

                <div className="profile-grid">
                    <div className="profile-items">
                        {this.props.posts.reverse().map((post, idx) =>
                            <UserProfileItem
                                key={idx}
                                post={post} />
                        )}
                    </div>
                </div>
            )
        }
    }



    render() {
        
        
        if (this.state.loaded === false) {
            
            return (
                <div className="loading">
                    <img src={window.instagram} alt="" />
                    <div>
                        <span>from</span>
                        <p>JEAN YANG</p>
                    </div>

                </div>
            )
        } else {
            
            return (
                <div className="profile-all"> 
                    <HeaderContainer />
                    <div className="user-profile">
                        <div className="profile-header">
                            <div className="profile-photo">
                                <img className="profile-photo-img" src={this.props.user.profilePhoto} /> 
                            </div>
                            
                            <div className="user-info">
                                <div className="user-info-username">
                                    {this.props.user.username}    
                                    {this.renderEdit()}
                                </div>
                                <div className="user-info-name">
                                    {this.props.user.name}
                                </div>
                                <div className="user-info-bio">
                                    {this.props.user.bio}
                                </div>
                            </div>   
                            
                        </div>

                        <div className="profile-middle-line">
                            <section className="profile-middle">    
                                <img src={window.grid} />
                                <div>POSTS</div>
                            </section>
                        </div>
                        {this.renderPosts()}
                       

                        



                    </div>
                    
                    <div className="footer-container">
                        <div className="footer-all">
                            <a href="https://jeanyang0519.github.io/jeanyang0519/" rel="noopener noreferrer" target="_blank">ABOUT ME</a>
                            <a href="https://www.linkedin.com/in/jean-yang-327497156" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
                            <a href="https://github.com/jeanyang0519" rel="noopener noreferrer" target="_blank">GITHUB</a>
                            <a href="https://angel.co/jean-yang-5" rel="noopener noreferrer" target="_blank">ANGEL LIST</a>
                            <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>

                        </div>
                    </div>
                </div>
                
            )
        }

        


    }
}

export default UserProfile;