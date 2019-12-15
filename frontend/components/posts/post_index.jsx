import React from 'react';
// import PostIndexItemContainer from './post_index_item_container';
import HeaderContainer from '../header/header_container';

class PostIndex extends React.Component {


    constructor(props) {
        super(props);
        
        
    }

    componentDidMount() {
        this.props.fetchAllPosts()
            
    }

    render() {
        const posts = Object.values(this.props.posts);
        const post = posts.map(post => (
            // <li key={post.id}>{post.potoUrl}</li>
            <li key={post.id}><img src={post.photoUrl} /></li>
            ))

            
        return (
            <div>
                <HeaderContainer />
                <ul>
                    {post}
                </ul>
            </div>
        );
    }
}

export default PostIndex;