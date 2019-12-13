import GreetingContainer from "./session/greeting_container";
import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);



export default App;