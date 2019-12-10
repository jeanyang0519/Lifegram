import { Link } from 'react-router-dom';
import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    Welcome! {this.props.currentUser.username}
                    <button onClick={this.props.logout}>log out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/signup'>Sign Up</Link>
                    <br />
                    <Link to='/login'>Log In</Link>
                </div>
            );
        }



    }
}

export default Greeting;