import GreetingContainer from "./session/greeting_container";
import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostShowContainer from './posts/post_show_container';
import UserProfileContainer from './users/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path='/posts/:id' component={PostShowContainer} />
            <ProtectedRoute path='/users/:id' component={UserProfileContainer} />
        </Switch>
    </div>
);



export default App;