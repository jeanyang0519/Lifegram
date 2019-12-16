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


                    {/* <div className="post-show">
                        {this.props.user.username}
                        {this.props.post.location}
                        
                    </div>

                    <img className="photoUrl" src={this.props.post.photoUrl} />
                    <div>
                        <div className="post-icon">
                            <img className="like-icon" src={window.like}></img>
                            <img className="comment-icon" src={window.comment}></img>
                        </div>
                        <div className="post-body">{this.props.post.body}</div>
                    </div> */}

                    <div className="post-show">
                            <img className="photoUrl" src={this.props.post.photoUrl} />
                            <div className="post-show-content">
                                {/* <div> */}
                                    {this.props.currentUser.username}
                                    {this.props.post.location}
                                {/* </div> */}
                                {/* <div> */}
                                    {this.props.currentUser.username}
                                    {this.props.post.body}
                                {/* </div> */}
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

