import { HashRouter } from "react-router-dom";
import App from "./app";
import React from 'react';
import { Provider } from 'react-redux'

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;

