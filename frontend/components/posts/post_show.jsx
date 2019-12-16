import React from 'react';
import HeaderContainer from '../header/header_container';

class PostShow extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="post-show">
                <HeaderContainer/>
                
                {this.props.post.photoUrl}
                {this.props.currentUser.username}
                {this.props.post.location}
            </div>
            
        )
    }
}

export default PostShow

