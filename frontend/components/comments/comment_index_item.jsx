import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        
        this.props.fetchUsers();
    }


    render() {

        if (this.props === undefined || this.props.users === undefined) {
            return null
        } else {
       

        const allCommentIds = this.props.post.comment_ids
        const commentsForPost = this.props.comments.filter(comment => allCommentIds.includes(comment.id))

        
        return (
            <div className="">



                {commentsForPost.map((comment) => {

                    return (

                        <div className="comment" >
                            <div className="comment-profile-photo">
                                <img src={this.props.users[comment.user_id].profilePhoto} />
                            </div>
                            <p className="comment-username">{this.props.users[comment.user_id].username}</p>
                            <p className="comment-body">{comment.comment_body}</p>
                        </div>
                    );
                })}




            </div>

        )}
    }
}

export default CommentIndexItem;