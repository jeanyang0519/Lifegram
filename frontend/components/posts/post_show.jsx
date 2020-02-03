import React from 'react';
import HeaderContainer from '../header/header_container';
import LikeContainer from '../likes/like_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItemContainer from '../comments/comment_index_item_container'
import { time } from '../../util/time_api_util';
import { Link } from 'react-router-dom';



class PostShow extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     loaded: false
        // }

    }
    componentDidMount() {
        // debugger
        this.props.fetchPost(this.props.match.params.id)
        this.props.fetchUsers()
        
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
                                        <div className="feed-profile-photo">
                                            <Link to={`/users/${this.props.currentUser.id}`}>
                                                <img src={this.props.currentUser.profilePhoto} />
                                            </Link>
                                        </div>


                                        {/* <img className="feed-profile-photo" src={this.props.currentUser.profilePhoto} /> */}
                                        <div className="feed-user-info">
                                            <div className="post-authorname">{this.props.currentUser.username}</div>
                                            
                                            <div className="location">{this.props.post.location}</div>
                                        </div>
                                    </div>

                                    <img className="post-option" src={window.option}
                                        onClick={() => {
                                            this.props.openModal('showOption', this.props.post.id)
                                        }} />

                                </div>
                            
                                <div className="post-show-body">
                                    <div className="comment">
                                        
                                        <div className="comment-profile-photo">
                                            <Link to={`/users/${this.props.currentUser.id}`}>
                                                <img src={this.props.currentUser.profilePhoto} />
                                            </Link>
                                        </div>
                                    <Link to={`/users/${this.props.currentUser.id}`}>
                                        <p className="comment-username">{this.props.currentUser.username}</p>
                                    </Link>
                                        <p className="comment-body">{this.props.post.body}</p>
                                        
                                    </div>
                                    <div className="post-show-comments">
                                        <CommentIndexItemContainer post={this.props.post}/>
                                    </div>

                                </div>
                                <div className="post-icon">
                                    <LikeContainer post={this.props.post} />
                                    <div className='show-time'>
                                        {time(this.props.post.created_at)}
                                    </div>
                                </div>
                                <CommentFormContainer postId={this.props.post.id}/>
                                
                        </div>
                    
                    

                    </div>

                    <div className="footer-container">
                        <div className="footer-all">
                            <a href="https://jeanyang0519.github.io/jeanyang0519/" rel="noopener noreferrer" target="_blank">ABOUT ME</a>
                            <a href="https://www.linkedin.com/in/jean-yang-327497156" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
                            <a href="https://github.com/jeanyang0519" rel="noopener noreferrer" target="_blank">GITHUB</a>
                            <a href="https://angel.co/jean-yang-5" rel="noopener noreferrer" target="_blank">ANGEL LIST</a>
                            <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>

                        </div>
                    </div>
                </div>
                
            )
        }
    }
}

export default PostShow

