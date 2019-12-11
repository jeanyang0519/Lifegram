import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store"
import { login, signup, logout} from './actions/session_actions'

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
    window.login = login
    window.signup = signup
    window.logout = logout
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.store = store;
});