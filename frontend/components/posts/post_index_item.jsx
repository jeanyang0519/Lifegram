import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <div className="post-item">
                
            
                
                <div className="post-header">
                    {this.props.user.username}
                    {this.props.post.location}
                    <img className="post-option" src={window.option}
                        onClick={() => this.props.openModal('postOption')} />
                </div>

                <img className="photoUrl" src={this.props.post.photoUrl} />
                <div>
                    <div className="post-icon">
                        <img className="like-icon" src={window.like}></img>
                        <img className="comment-icon" src={window.comment}></img>
                    </div>
                    <div className="post-body">{this.props.post.body}</div>
                </div>
            </div>

        )
    }
}

export default PostIndexItem;