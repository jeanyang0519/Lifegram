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
    //     this.props.fetchAllPosts()
    //     this.props.fetchUsers()
    //         .then(() => {
    //             this.setState({ loaded: true })
    //         });
    // }



    render() {
        return (
            <div>
                <HeaderContainer />
                    
                <div className="footer-all">
                    <a className="footer" href="https://www.linkedin.com/in/jean-yang-327497156">LINKEDIN</a>
                    <a className="footer" href="https://github.com/jeanyang0519">GITHUB</a>
                    <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>
                </div>
            </div>
        )
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