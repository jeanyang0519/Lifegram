import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }


    render() {
        
        return (
            <div>

                
                
                {this.props.comments.map((comment, idx) => {
                    
                    return(
                        <div key={idx} className="comment">
                            <Link to={`users/${this.props.users[comment.user_id].id}`}>
                                <p className="comment-username">{this.props.users[comment.user_id].username}</p>
                            </Link>
                            <p className="comment-body">{comment.comment_body}</p>
                        </div>
                    );
                })}

                
                

            </div>

        )
    }
}

export default CommentIndex;