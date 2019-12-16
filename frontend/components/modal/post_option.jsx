import React from 'react';
import { Redirect } from 'react-router-dom';

class PostOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        <Redirect to={`/posts/${this.props.post.id}`}/>

    }



    render() {
        return (
            <div>
                <div className="option-1" onClick={this.handleClick}>Go to Post</div>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>
            </div>
        )
    }
}
export default PostOption;