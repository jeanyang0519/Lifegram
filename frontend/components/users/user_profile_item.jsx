import React from 'react';
import { Link } from 'react-router-dom';

class UserProfileItem extends React.Component {
    constructor(props) {
        super(props)

 
    }

    // componentDidUpdate(prevProps) {
    //     // const { userId, getUser, users } = this.props;
    //     if (users[userId] === undefined || prevProps.match.params.userId !== this.props.match.params.userId) {
    //         this.props.fetchAllPosts()
    //     }
    // }

 

    render() {
        return (
            <Link to={`/posts/${this.props.post.id}`}>
                <div className="profile-post-wrapper">

                    <img className="profile-post"src={this.props.post.photoUrl} />


                    <div className="counts-wrapper ">
                        <div className='counts'>
                            <img src={window.whitelike} />
                            <div>{this.props.post.like_ids.length}</div>
                            <img src={window.whitecomment} />
                            <div>{this.props.post.comment_ids.length}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

}

export default UserProfileItem