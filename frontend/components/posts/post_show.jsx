import React from 'react';
import HeaderContainer from '../header/header_container';
import LikeContainer from '../likes/like_container';
// import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItemContainer from '../comments/comment_index_item_container'


class PostShow extends React.Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.match.params.id)
    }

    render() {
        // debugger
        if (this.props.post === undefined || this.props.currentUser === undefined ) {
            return null
        } else {
            return (
                <div className="post-show-all">
                    <HeaderContainer/>


                

                    <div className="post-show">
                        <div className="post-show-left">
                            <img className="post-show-photo" src={this.props.post.photoUrl} />
                        </div>

                            
                        <div className="post-show-content">

                            {/* post-header is the same as post-index-item */}
                                <div className="post-header">
                                    <div className="post-header-user-info">
                                        <img className="feed-profile-photo" src={this.props.currentUser.profilePhoto} />
                                        <div className="feed-user-info">
                                            <div className="post-authorname">{this.props.currentUser.username}</div>
                                            
                                            <div className="location">{this.props.post.location}</div>
                                        </div>
                                    </div>

                                    <img className="post-option" src={window.option}
                                        onClick={() => {
                                            this.props.openModal('postOption', this.props.post.id)
                                        }} />

                                </div>
                            
                                <div className="post-show-body">
                                    <div className="comment">
                                        
                                        <img className="comment-profile-photo" src={this.props.currentUser.profilePhoto} />
                                        <p className="comment-username">{this.props.currentUser.username}</p>
                                        <p className="comment-body">{this.props.post.body}</p>
                                        
                                    </div>
                                    <div className="post-show-comments">
                                        <CommentIndexItemContainer post={this.props.post}/>
                                    </div>

                                </div>
                                <div className="post-icon">
                                    <LikeContainer post={this.props.post} />
                                    {/* <img className="like-icon" src={window.like}></img>
                                    <img className="comment-icon" src={window.comment}></img> */}
                                </div>
                            <CommentFormContainer postId={this.props.post.id}/>
                                {/* <div className="post-show-comment">
                                    <input type="text" placeholder="Add a Comment..."/>
                                    <a href="#">Post</a>
                                </div> */}
                        </div>
                    
                    

                    </div>

                    <div className="footer-container">
                        <div className="footer-all">
                            <a className="footer-1" href="https://www.linkedin.com/in/jean-yang-327497156">LINKEDIN</a>
                            <a className="footer-2" href="https://github.com/jeanyang0519">GITHUB</a>
                            <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>

                        </div>
                    </div>
                </div>
                
            )
        }
    }
}

export default PostShow

