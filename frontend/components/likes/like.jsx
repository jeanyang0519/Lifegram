import React from 'react';
import { Link } from 'react-router-dom';

class Like extends React.Component {
    constructor(props) {
        super(props);


        this.handlecreate = this.handlecreate.bind(this);
        this.handleremove = this.handleremove.bind(this);
        this.showLike = this.showLike.bind(this);
        this.showLikeNum = this.showLikeNum.bind(this);

    }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //         this.fetchData(this.props.userID);
    //     }
    // }

    handlecreate() {
// debugger
        this.props.createLike({
            
            likeable_id: this.props.post.id,
            likeable_type: "Post"
            
        })
    }

    handleremove() {
        // debugger
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].user_id === this.props.currentUser.id) {
                this.props.removeLike(this.props.likes[i].id);
                return;
            }
        }
    }



    showLike() {

        
        const { likeUsers, currentUser } = this.props;


        if (likeUsers.includes(currentUser.id)) {
            // debugger;
            return (
            <div >
                <img className="like-icon" src={window.redlike} onClick={this.handleremove} />
                <Link to={`/posts/${this.props.post.id}`}>
                <img className="comment-icon" src={window.comment} />
                    </Link>
            </div>
            )
        } else {
            // debugger;
            return (
            <div >
                <img className="like-icon" src={window.like} onClick={this.handlecreate} />
                    <Link to={`/posts/${this.props.post.id}`}>
                <img className="comment-icon" src={window.comment} />
                    </Link>
            </div>
            )
        }
    }

    showLikeNum() {
        const { likes } = this.props;
        if (likes.length === 0) {
            return (
                <div className="likes-count">
                    Be the first to like this
                </div>
            );
        } else if (likes.length === 1) {
            return (<div className="likes-count">1 like</div>);
        } else {
            return (<div className="likes-count">{likes.length} likes</div>);
        }
    }

    render() {
        return (
            <div >
                {this.showLike()}
                {this.showLikeNum()}
            </div>
        );
    }
}

export default Like; 
