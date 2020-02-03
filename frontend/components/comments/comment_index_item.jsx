import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchUsers();

        if (this.props.comments.length === 0) {
            this.props.fetchAllComments()
        }
    }


    render() {
// debugger
        if (this.props === undefined || this.props.users === undefined) {
            return null
        } else {
            const allCommentIds = this.props.post.comment_ids
            const commentsForPost = this.props.comments.filter(comment => allCommentIds.includes(comment.id))
            return (
                <div>
                    {commentsForPost.map((comment, idx) => {

                        return (

                            <div key={idx} className="comment" >
                                <div className="comment-profile-photo">
                                    <Link to={`/users/${this.props.users[comment.user_id].id}`}>
                                        <img src={this.props.users[comment.user_id].profilePhoto} />
                                    </Link>
                                </div>
                                <Link to={`/users/${this.props.users[comment.user_id].id}`}>
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
}

export default CommentIndexItem;