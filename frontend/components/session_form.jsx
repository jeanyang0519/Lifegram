import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        const errors = this.props.errors.map((error, i) => {
            return <li key={i}>{error}</li>
        })
        if (this.props.formType === 'login') {
            return (
                <form>
                    <ul>{errors}</ul>
                    <header>Log In</header>
                    Username: <input type="text" onChange={this.update("username")} value={this.state.username} />
                    Email: <input type="text" onChange={this.update("email")} value={this.state.email} />
                    Password: <input type="password" onChange={this.update("password")} value={this.state.password} />
                    <button onClick={this.handleSubmit}>Log In</button>
                    <Link to="/signup">sign up instead</Link>
                </form>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <form>
                    <ul>{errors}</ul>
                    <header>Sign Up</header>
                    Username: <input type="text" onChange={this.update("username")} value={this.state.username} />
                    Email: <input type="text" onChange={this.update("email")} value={this.state.email} />
                    <br />
                    Password: <input type="password" onChange={this.update("password")} value={this.state.password} />
                    <br />
                    <button onClick={this.handleSubmit}>Sign Up</button>
                    <br />
                    <Link to="/login">log in instead</Link>
                </form>
            )
        }

    };

}


export default SessionForm;