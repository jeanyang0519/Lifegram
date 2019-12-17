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
        this.props.handlecreate({
            post_id: this.props.postId
        });
    }

    handleremove() {
        for (let i = 0; i < likes.length; i++) {
            if (this.props.likes[i].user_id === this.props.currentUser) {
                this.props.handleremove(likes[i]);
                return;
            }
        }
    }



    showLike() {
        const { likeUsers, currentUser } = this.props;


        if (likeUsers.includes(currentUser)) {
            debugger;
            <div className="like-comment-bar">
                <img className="like-icon" src={window.redlike} onClick={this.handleremove} />
                <img className="comment-icon" src={window.comment} />
            </div>
        } else {
            <div className="like-comment-bar">
                <img className="like-icon" src={window.redlike} onClick={this.handlecreate} />
                <img className="comment-icon" src={window.comment} />
            </div>
        }
    }

    showLikeNum() {
        const { likes } = this.props;
        if (likes.length === 0) {
            return (
                <div className="num-likes">
                    Be the first to like this
                </div>
            );
        } else if (likes.length === 1) {
            return (<div className="num-likes">1 like</div>);
        } else {
            return (<div className="num-likes">{likes.length} likes</div>);
        }
    }

    render() {
        return (
            <div className='icon-bar'>
                {this.showLike()}
                {this.showLikeNum()}
            </div>
        );
    }
}

export default Like; 
