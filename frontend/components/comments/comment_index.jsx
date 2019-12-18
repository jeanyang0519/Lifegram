import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
       
    }

    componentDidMount() {
       
        this.props.fetchUsers()
           
    }



    render() {
        
        return (
            <div className="">

                
                
                {this.props.comments.map(comment => {
                    
                    return(
                        <>
                            <p>{comment.comment_body}</p>
                            <p>{this.props.users[comment.user_id].username}</p>
                        </>
                    );
                })}

                
                

            </div>

        )
    }
}

export default CommentIndex;