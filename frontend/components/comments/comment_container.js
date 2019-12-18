// import { createLike, removeLike } from '../../actions/like_actions';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Like from './like';

// const msp = (state, ownProps) => {
//     // debugger

//     const allLikes = state.entities.posts[ownProps.post.id].like_ids;
//     const likes = Object.values(state.entities.likes).filter(like =>
//         allLikes.includes(like.id));
//     const likeUsers = ownProps.post.like_ids.map(id => {
//         return state.entities.likes[id].user_id
//     })
//     const currentUser = state.entities.users[state.session.id]

//     debugger

//     return ({
//         likes,
//         likeUsers,
//         currentUser
//     });
// };

// const mdp = dispatch => ({
//     createLike: like => dispatch(createLike(like)),
//     removeLike: id => dispatch(removeLike(id))
// });

// export default withRouter(connect(msp, mdp)(Like));
