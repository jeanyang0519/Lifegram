import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }


    render() {
        
        return (
            <div>

                
                
                {this.props.comments.map((comment, idx) => {
                    
                    return(
                        <div className="comment">
                            <p className="comment-username">{this.props.users[comment.user_id].username}</p>
                            <p className="comment-body">{comment.comment_body}</p>
                        </div>
                    );
                })}

                
                

            </div>

        )
    }
}

export default CommentIndex;