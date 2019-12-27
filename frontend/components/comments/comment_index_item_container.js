// import { createComment, removeComment, fetchAllComments, fetchComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_action'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentIndexItem from './comment_index_item';
import { fetchAllComments } from '../../actions/comment_actions';


const msp = (state) => {
    
    const comments = Object.values(state.entities.comments)
    
    return ({
        comments,
        users: state.entities.users
    });
};

const mdp = dispatch => ({
    fetchAllComments: () => dispatch(fetchAllComments()),
    fetchUsers: users => dispatch(fetchUsers(users))
    
});

export default withRouter(connect(msp, mdp)(CommentIndexItem));
