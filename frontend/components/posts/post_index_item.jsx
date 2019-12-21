import React from 'react';
import LikeContainer from '../likes/like_container';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const profilePhoto = this.props.user.profilePhoto ? 
        // (this.props.user.profilePhoto) : (window.italy)
// debugger
        // debugger
        return(
            <div className="post-item">
                
                
                <div className="post-header">
                    <div className="post-header-user-info">
                        
                        <img className="feed-profile-photo" src={this.props.user.profilePhoto} /> 
                        
                        <div className="feed-user-info">
                            <div className="post-authorname">{this.props.currentUser.username}</div>
                            
                            <div className="location">{this.props.post.location}</div>
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

                    </div>

                    
                    
                </div>

                <div className="post-body">
                    <div className="post-body-1">
                        <p className="post-authorname">{this.props.user.username}</p>
                        <p>{this.props.post.body}</p>
                    </div>
                    <div className="post-body-2">
                        <CommentIndexContainer post={this.props.post} users={this.props.users} />
                    </div>
                    
                </div>

                <div className="time">
                    {this.props.post.created_at}
                </div>

                <CommentFormContainer postId={this.props.post.id}/>
               
            </div>

        )
    }
}

export default PostIndexItem;