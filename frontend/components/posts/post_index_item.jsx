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

                <div>
                    <img className="photoUrl" src={this.props.post.photoUrl} />
                </div>

                <div>
                    <div className="post-icon">
                        <LikeContainer post={this.props.post}/>
                        {/* {<img className="like-icon" src={window.like}></img>} */}
                        {/* <img className="comment-icon" src={window.comment}></img> */}
                    </div>
                    
                </div>

                <div className="post-body">
                    <div>{this.props.user.username}</div>
                    <p>{this.props.post.body}</p>
    
                    
                </div>

                <div className="time">
                    {this.props.post.created_at}
                </div>

                <div className="post-show-comment">
                    <input type="text" placeholder="Add a Comment..." />
                    <a href="#">Post</a>
                </div>

            </div>

        )
    }
}

export default PostIndexItem;