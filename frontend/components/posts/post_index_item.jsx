import React from 'react';
import LikeContainer from '../likes/like_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const profilePhoto = this.props.user.profilePhoto ? 
        (this.props.user.profilePhoto) : (window.italy)

        // debugger
        return(
            <div className="post-item">
                
                
                <div className="post-header">
                    <div className="post-header-user-info">
                        
                        <img className="feed-profile-photo" src={profilePhoto} /> 
                        
                        <div className="feed-user-info">
                            {this.props.user.username}
                            <br/>
                            <span>{this.props.post.location}</span> 
                        </div>
                    </div>
                    
                    <img className="post-option" src={window.option}
                        onClick={() => {
                            this.props.openModal('postOption', this.props.post.id)
                        }} />
                    
                </div>

                <img className="photoUrl" src={this.props.post.photoUrl} />
                <div>
                    <div className="post-icon">
                        <LikeContainer post={this.props.post}/>
                        {/* {<img className="like-icon" src={window.like}></img>}
                        <img className="comment-icon" src={window.comment}></img> */}
                    </div>
                    <div className="post-body">{this.props.post.body}</div>
                </div>
            </div>

        )
    }
}

export default PostIndexItem;