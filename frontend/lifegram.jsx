import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store"
// import { login, signup, logout} from './actions/session_actions'
// import { handleImage } from './components/posts/post_form';
import { createPost, removePost } from './actions/post_actions';
import { createLike, removeLike } from './actions/like_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // const store = configureStore();
    

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root);

    //test 
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.store = store;
    // window.handleImage = handleImage;
    window.createPost = createPost;
    window.removePost = removePost;
    window.createLike = createLike;
    window.removeLike = removeLike;

});