import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.renderComments = this.renderComments.bind(this);

        // this.state = {
        // //     _isMounted: false,
        //     // loaded: false
        // }
    }

    // componentDidMount() {
    //     // this.state._isMounted = true;


    //     // this.props.fetchAllPosts()
    //     this.props.fetchUsers()
    //         // .then(() => {
    //         //     this.setState({ loaded: true })
    //         // });
    // }

    // renderComments() {
    //     const { comments } = this.props;
    //     let showCommentsObj = [];
    //     for (let i = 0; i < comments.length; i++) {
    //         showCommentsObj.push(comments[i])
    //     }
    //     return showCommentsObj.map(commentObj => commentObj.comment_body)
    //     // this.props.comments.map(comment => {
    //     //     comment
    //     // })
    // }


    render() {
        
        // debugger

        // const commenter = this.props.commenterIds.forEach(commenterId => {
        //     if (this.props.user.id === commenterId) {
        //         // debugger
        //        return <li> {this.props.user.username}</li>
        //     }
        // })

        // const commenter = this.props.users.forEach(user => {
        //     if (this.props.user.id === comm)
        // })

        // this.props.allComments.map(comment => comment)
       
        

        debugger
        return (
            <div className="">
                
                {this.props.comments.map(comment => {
                    
                    comment.comment_body
                })}
                

            </div>

        )
    }
}

export default CommentIndex;