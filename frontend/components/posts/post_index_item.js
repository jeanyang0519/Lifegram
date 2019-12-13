import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const posts = Object.values(this.props.posts);
        // const post = posts.map(post => <li key={post.id}>{post.body}</li>)
        
        return(

            
            <div>
                testing for PostIndexItem
            </div> 

        )
    }
}

export default PostIndexItem;