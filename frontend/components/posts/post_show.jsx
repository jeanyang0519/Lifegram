import React from 'react';
import HeaderContainer from '../header/header_container';
// import { fetchPost } from '../../actions/post_actions';

class PostShow extends React.Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }

    render() {
        if (this.props.post === undefined || this.props.currentUser === undefined ) {
            return null
        } else {
            return (
                <div>
                    <HeaderContainer/>


                

                    <div className="post-show">
                            <img className="post-show-photo" src={this.props.post.photoUrl} />

                            
                            <div className="post-show-content">

                            {/* post-header is the same as post-index-item */}
                            <div className="post-header">
                                <div className="post-header-user-info">
                                    <img className="feed-profile-photo" src={this.props.currentUser.profilePhoto} />
                                    <div className="feed-user-info">
                                        {this.props.currentUser.username}
                                        <br />
                                        <span>{this.props.post.location}</span>
                                    </div>
                                </div>

                                <img className="post-option" src={window.option}
                                    onClick={() => {
                                        this.props.openModal('postOption', this.props.post.id)
                                    }} />

                            </div>
                            
                                <div className="post-show-body">
                                    <img className="feed-profile-photo" src={this.props.currentUser.profilePhoto} />
                                    <div className="post-show-body-info">
                                    <div className="post-show-body-username">
                                        {this.props.currentUser.username}
                                    </div>
                                        
                                    <div className="post-show-body-detail">
                                            {this.props.post.body}
                                        </div>
                                    </div>
                                </div>
                                <div className="post-icon">
                                    <img className="like-icon" src={window.like}></img>
                                    <img className="comment-icon" src={window.comment}></img>
                                </div>
                            </div>
                    
                    

                    </div>
                </div>
                
            )
        }
    }
}

export default PostShow

