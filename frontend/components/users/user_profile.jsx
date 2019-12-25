import React from 'react';
import HeaderContainer from '../header/header_container';
import UserProfileItem from './user_profile_item';
import { Link } from 'react-router-dom'
// import { openModal } from '../../actions/modal_actions';


class UserProfile extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchAllPosts()
            .then(() => {
                this.setState({ loaded: true })
            });  
    }



    render() {
        
        if (this.state.loaded === false) {
            
            return null
        } else {
            
            return (
                <div className=""> 
                    <HeaderContainer />
                    <div className="profile-all">
                        <div className="profile-header">
                            <div className="profile-photo">
                                <img className="profile-photo-img" src={this.props.user.profilePhoto} /> 
                            </div>
                            
                            <div className="user-info">
                                <div className="user-info-username">
                                    {this.props.user.username}
                                    
                                    <div className="edit-profile-button">
                                        <Link to={`/users/${this.props.user.id}/edit`} className="edit-link"   >Edit Profile</Link>
                                    </div>
                                    
                                    
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
                                <img src={window.menu} />
                            </section>
                        </div>
                        
                        <div className="profile-grid">
                            <div className="profile-items">
                                {this.props.posts.map((post, idx) =>
                                    <UserProfileItem
                                        key={idx}
                                        post={post} />
                                )} 
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
                    
                </div>
                
            )
        }

        


    }
}

export default UserProfile;