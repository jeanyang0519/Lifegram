// import { createComment, removeComment, fetchAllComments, fetchComment } from '../../actions/comment_actions';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';


const msp = (state, ownProps) => {

    const allComments = state.entities.posts[ownProps.post.id].comment_ids;
    const comments = Object.values(state.entities.comments).filter(comment =>
        allComments.includes(comment.id));
       
    return ({
        comments,
       
    });
};


export default withRouter(connect(msp, null)(CommentIndex));
