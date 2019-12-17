import { combineReducers } from "redux";
import currentPostReducer from "./current_post_reducer";


const uiReducer = combineReducers({
    currentPostId: currentPostReducer
    
});



export default uiReducer;