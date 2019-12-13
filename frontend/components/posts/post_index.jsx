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
            <li key={post.id}>{post.body}</li>
            ))
        return (
            <main>
                <HeaderContainer />
                <ul>
                    {post}
                </ul>
            </main>
        );
    }
}

export default PostIndex;