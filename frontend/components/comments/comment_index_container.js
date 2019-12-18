import { createComment, removeComment, fetchAllComments, fetchComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_action'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';

const msp = (state, ownProps) => {
debugger
    const allComments = state.entities.posts[ownProps.post.id].comment_ids;
    const comments = Object.values(state.entities.comments).filter(comment =>
        allComments.includes(comment.id));
    // const commenterIds = ownProps.post.comment_ids.map(id => {
    //     return state.entities.comments[id].user_id
    // })
    return ({
        comments
        // commenterIds,
        // users: state.entities.users
    });
};

const mdp = dispatch => ({
    fetchAllComments: () => dispatch(fetchAllComments()),
    fetchUsers: users => dispatch(fetchUsers(users))
    // createComment: comment => dispatch(createComment(comment)),
    // removeComment: id => dispatch(removeComment(id))
});

export default withRouter(connect(msp, mdp)(CommentIndex));
