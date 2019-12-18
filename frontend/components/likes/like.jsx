import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);


        this.handlecreate = this.handlecreate.bind(this);
        this.handleremove = this.handleremove.bind(this);
        this.showLike = this.showLike.bind(this);
        this.showLikeNum = this.showLikeNum.bind(this);

    }

    handlecreate() {
// debugger
        this.props.createLike({
            
            likeable_id: this.props.post.id,
            likeable_type: "Post"
            
        })
    }

    handleremove() {
        debugger
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
            debugger;
            return (
            <div >
                <img className="like-icon" src={window.redlike} onClick={this.handleremove} />
                <img className="comment-icon" src={window.comment} />
            </div>
            )
        } else {
            // debugger;
            return (
            <div >
                <img className="like-icon" src={window.like} onClick={this.handlecreate} />
                <img className="comment-icon" src={window.comment} />
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
