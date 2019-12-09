import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<h1>Welcome to Lifegram</h1>, root);

    //test 
    // window.login = login
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
});