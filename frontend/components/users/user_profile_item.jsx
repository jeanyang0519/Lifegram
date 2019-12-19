import React from 'react';

class UserProfileItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="profile-post-wrapper">
                <img className="profile-post"src={this.props.post.photoUrl} />
            </div>
        )
    }

}

export default UserProfileItem