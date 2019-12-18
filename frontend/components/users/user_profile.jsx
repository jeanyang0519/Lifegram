import React from 'react';
// import PostIndexItemContainer from './post_index_item_container'
import HeaderContainer from '../header/header_container';
import UserProfileItem from './user_profile_item';
// import PostIndexItem from './post_index_item';

class UserProfile extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        // debugger
        // this.props.fetchUser(this.props.match.params.id)
        // this.props.fetchPost(this.props.match.params.id)

        this.props.fetchAllPosts()
            .then(() => {
                this.setState({ loaded: true })
            });
        // this.props.fetchUser(id)
        //     .then(() => {
        //         this.setState({ loaded: true })
        //     });
    }



    render() {
        // const { user } = this.props.user
        // debugger
        if (this.state.loaded === false) {
            
            return null
        } else {
            
            return (
                <div className=""> 
                    <HeaderContainer />
                    <div className="profile-all">
                        <div className="profile-header">
                            
                            <img className="profile-photo" src={this.props.user.profilePhoto} /> 
                            
                            <div className="user-info">
                                <div className="user-info-username">
                                    {this.props.user.username}
                                    <img src={window.settings} />
                                    
                                </div>
                                <div className="user-info-name">
                                    {this.props.user.name}
                                </div>
                                <div className="user-info-bio">
                                    {this.props.user.bio}
                                </div>
                            </div>

                            {/* <div className='profile-setting'>
                                
                            </div> */}
                            
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

        // const posts = Object.values(this.props.posts);

        // debugger

        // if (this.state.loaded === false) {
        //     return null
        // } else {
        //     return (
        //         <div className="feed">
        //             <HeaderContainer />
        //             {posts.map((post, idx) => {
        //                 let user = this.props.users[post.author_id];
        //                 return <PostIndexItemContainer
        //                     key={idx}
        //                     user={user}
        //                     post={post} />;
        //             })}

        //         </div>
        //     )
        // }


    }
}

export default UserProfile;