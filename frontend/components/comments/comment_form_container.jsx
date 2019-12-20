import React from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions'; 

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment_body: '',
            post_id: this.props.postId 
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleInput() {
        return e => {
            this.setState({ comment_body: e.target.value})
        }
    }

    handleSubmit() {
        this.props.createComment(this.state)
            .then(
                this.setState({
                    comment_body: ''
                })
            )
        
    }

    render() {
        return(
            <div className="post-show-comment">
                <input type="text" placeholder="Add a Comment..."
                    value={this.state.comment_body} 
                    onChange={this.handleInput()} />
                <a onClick={() => this.handleSubmit()}>Post </a>
            </div>
        )
    }

}



const mdp = dispatch => {
    // debugger
    return({

        createComment: comment => dispatch(createComment(comment))
    })
    
};

export default connect(null, mdp)(CommentForm);