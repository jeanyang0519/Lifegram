import React from 'react';
// import PostIndexItemContainer from './post_index_item_container'
import HeaderContainer from '../header/header_container';
// import PostIndexItem from './post_index_item';

class UserProfile extends React.Component {


    constructor(props) {
        super(props);

        // this.state = {
        //     loaded: false
        // }
    }

    // componentDidMount() {
    //     debugger
    //     // this.props.fetchUser(this.props.match.params.id)
    //     // this.props.fetchPost(this.props.match.params.id)

    //     // this.props.fetchAllPosts()
    //     this.props.fetchUser(id)
    //         .then(() => {
    //             this.setState({ loaded: true })
    //         });
    // }



    render() {
        // const { user } = this.props.user
        // debugger
        // if (this.props.user === undefined) {
        //     // debugger
        //     return null
        // } else {
            debugger
            return (
                <div className="profile">
                    <HeaderContainer />
                    <div className="profile-header">
                        <img className="profile-photo" src={this.props.user.profilePhoto} /> 
                        <div className="user-info">
                            {this.props.user.username}
                            {this.props.user.name}
                            {this.props.user.bio}
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="footer-all">
                        <a className="footer" href="https://www.linkedin.com/in/jean-yang-327497156">LINKEDIN</a>
                        <a className="footer" href="https://github.com/jeanyang0519">GITHUB</a>
                        <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>
                    </div>
                </div>
            )
        // }

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