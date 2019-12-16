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