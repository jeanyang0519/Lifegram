import React from 'react';
import PostIndexItemContainer from './post_index_item_container'
import HeaderContainer from '../header/header_container';

// import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.fetchAllPosts() 
        this.props.fetchUsers()
            .then(() => {
                this.setState({loaded: true})
            });
    }

   

    render() {
        const posts = Object.values(this.props.posts);
        
        // debugger
        
        if (this.state.loaded === false) {
            return null
        } else {
            return (
            <div className="feed">
                <HeaderContainer />
                {posts.map((post, idx) => {
                    let user = this.props.users[post.author_id];
                    return <PostIndexItemContainer
                        key={idx}
                        user={user}
                        post={post} />;
                })}
                
            </div>
            )
        }


    }
}

export default PostIndex;