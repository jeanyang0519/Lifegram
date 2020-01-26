import React from 'react';
import PostIndexItemContainer from './post_index_item_container'
import HeaderContainer from '../header/header_container';


class PostIndex extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            _isMounted: false,
            loaded: false
        }
    }

    componentDidMount() {
        this.state._isMounted = true;
        
        this.props.fetchAllComments()
        this.props.fetchAllPosts() 
        this.props.fetchUsers()
            .then(() => {
                this.setState({loaded: true})
            });
    }

   

    render() {
        const posts = Object.values(this.props.posts);
        
        if (this.state.loaded === false) {
            return null
        } else {
            return (
            <div className="feed">
                <HeaderContainer />
                    {posts.map((post, idx) => {
                    const user = this.props.users[post.author_id];
                    const users = this.props.users
                    return <PostIndexItemContainer
                        key={idx}
                        users={users}
                        user={user}
                        post={post}
                        />;
                })}
                
            </div>
            )
        }


    }
}

export default PostIndex;