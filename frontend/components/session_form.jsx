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



                <div className="signup">
                    <form className="signup-right-1">
                        <h3 className="title">Lifegram</h3>
                        <ul>{errors}</ul>
                        <div className="input-all">
                            <input className="input" placeholder="Email" type="text" onChange={this.update("email")} value={this.state.email} />

                            <input className="input" type="text" placeholder="Username" onChange={this.update("username")} value={this.state.username} />

                            <input className="input" type="password" placeholder="Password" onChange={this.update("password")} value={this.state.password} />

                            <button className="button" onClick={this.handleSubmit}>Log in</button>
                        </div>

                    </form>
                    <form className="signup-right-2">
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </form>
                </div>
            )
        } else if (this.props.formType === 'signup') {
            return (

                <div className="signup">
                    <form className="signup-right-1">
                        <h3 className="title">Lifegram</h3>
                        <ul>{errors}</ul>
                        <div className="input-all">
                            <input className="input" placeholder="Email" type="text" onChange={this.update("email")} value={this.state.email} />

                            <input className="input" type="text" placeholder="Username" onChange={this.update("username")} value={this.state.username} />

                            <input className="input" type="password" placeholder="Password" onChange={this.update("password")} value={this.state.password} />

                            <button className="button" onClick={this.handleSubmit}>Sign Up</button>
                        </div>

                    </form>
                    <form className="signup-right-2">
                        Have an account? <Link to="/login">log in</Link>
                    </form>
                </div>
            )
        }

    };

}


export default SessionForm;