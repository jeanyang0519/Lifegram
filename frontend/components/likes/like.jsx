import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.renderHeart = this.renderHeart.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.renderNumLikes = this.renderNumLikes.bind(this);
        this.focusOnComment = this.focusOnComment.bind(this);
    }

    createLike() {
        this.props.createLike({
            post_id: this.props.postId
        });
    }

    removeLike() {
        let { likes, currUser, removeLike } = this.props;

        for (let i = 0; i < likes.length; i++) {
            if (likes[i].user_id === currUser) {
                removeLike(likes[i]);
                return;
            }
        }
    }

    

    renderHeart() {
        let { likers, currUser } = this.props;
        return likers.includes(currUser) ? (
            <section id="icons">
                <img src={window.redlike} onClick={this.removeLike} />
                <img src={window.comment} />
            </section>
        ) : (
                <section id="icons">
                    <img src={window.redlike} onClick={this.createLike} />
                    <img src={window.comment} />
                </section>
            );
    }

    renderNumLikes() {
        let { likes } = this.props;
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
                {this.renderHeart()}
                {this.renderNumLikes()}
            </div>
        );
    }
}

export default Like; 