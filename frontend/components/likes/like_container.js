import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Like from './like';
import { createLike, removeLike } from '../../actions/like_actions';

const msp = (state, ownProps) => {
    let postLikes = state.entities.posts[ownProps.postId].like_ids;
    let filteredLikes = Object.values(state.entities.likes).filter(like =>
        postLikes.includes(like.id));

    return ({
        likes: filteredLikes,
        likers: state.entities.posts[ownProps.postId].liker_ids,
        currUser: state.session.currentUserId
    });
};

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    removeLike: id => dispatch(removeLike(id))
});

export default withRouter(connect(msp, mdp)(LikeBar));




import { connect } from 'react-redux';
import Like from './like';
import { createLike, removeLike } from '../../actions/like_actions';


const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    likes: state.entities.likes
})

const mdp = dispatch => ({
    createLike: (like) => dispatch(createLike(like)),
    removeLike: (id) => dispatch(removeLike(id))
})

export default connect(msp, mdp)(Like);