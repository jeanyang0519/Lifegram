import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import HeaderContainer from '../header/header_container';
// import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {


    constructor(props) {
        super(props);
        
        
    }

    componentDidMount() {
        this.props.fetchAllPosts() 
    }

    render() {
        const posts = Object.values(this.props.posts);
        // const post = posts.map(post => (
        //     <li key={post.id}>{post.body}</li>
            // <li key={post.id}><img src={post.photoUrl} /></li>
            // ))

            
        return (
            <div className="feed">
                <HeaderContainer />
                {posts.map((post, idx) => {
                    let user = this.props.users[post.author_id];
                    return <PostIndexItemContainer
                        key={idx}
                        user={user}
                        post={post} />;
                })} 
                {/* <PostIndexItemContainer post={post}/> */}
            </div>
        );
    }
}

export default PostIndex;