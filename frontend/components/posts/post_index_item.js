import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        // const posts = Object.values(this.props.posts);
        // const location = posts.map(post => (
        //     <li key={post.id}>{post.location}</li>
            // <li key={post.id}>{post.location}</li>
        ))
        // const location = posts.map(post => (
        //     <li key={post.id}>{post.location}</li>
        // ))
        // const body = posts.map(post => (
        //     <li key={post.id}>{post.body}</li>
        // ))
        // const time = posts.map(post => (
        //     <li key={post.id}>{post.create_at}</li>
        // ))

        
        // const photo = posts.map(post => (
        //     <li key={post.id}><img className="photoUrl" src={post.photoUrl}/></li>
            // <li key={post.id}>{post.location}</li>
        // ))
        
        
        return(

            
            <div className="post-item">
                {/* {username} */}
                {/* {this.props.user.username} */}
                {location}
                {photo}
            </div> 

        )
    }
}

export default PostIndexItem;