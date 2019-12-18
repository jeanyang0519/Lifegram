import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class PostOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.closeModal();
    }



    render() {
        return (
            <div>
                <Link to={`/posts/${this.props.postId}`} style={{ textDecoration: 'none' }}>
                    <div className="option-1" onClick={this.handleClick}>Go to Post</div>
                </Link>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>
            </div>
        )
    }
}
export default PostOption;