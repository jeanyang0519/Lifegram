import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchUsers();
    }


    render() {

        if (this.props === undefined || this.props.users === undefined) {
            return null
        } else {
        // debugger
        // const profilePhoto = this.props.user.profilePhoto ?
        // (this.props.user.profilePhoto) : (window.italy)
// debugger

        const allCommentIds = this.props.post.comment_ids
        const commentsForPost = this.props.comments.filter(comment => allCommentIds.includes(comment.id))

        // this.props.comments.filter(comment => {

        // })
        // const comments = Object.values(state.entities.comments).filter(comment =>
        //                     allComments.includes(comment.id));

        // debugger
        // debugger
        // const allthis.props.post.comment_ids
        return (
            <div className="">

{/* debugger */}

                {commentsForPost.map((comment) => {

                    return (

                        <div className="comment" >
                            <img className="comment-profile-photo" src={this.props.users[comment.user_id].profilePhoto} />
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