import React from 'react';
import { Link } from 'react-router-dom';
import SplashContainer from '../splash/splash_container';
import Footer from '../footers/footer_container';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    
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

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = { email: "jean@gmail.com", username: "jean0519", password: "123456" }
        this.props.login(user);
    }


    componentWillUnmount() {
        this.props.clearErrors();
    }

    
    render() {
        const errors = this.props.errors.map((error, i) => {
            return <li key={i}>{error}</li>
        })
        if (this.props.formType === 'login') {
            return (
                <main className="all">
                    <div className="content">
                        
                        <div className="session">
                            <form className="session-right-1">
                                <img className="logo" src={window.logo} />
                                
                                <div className="input-all">
                                    
                                    <input className="input" type="text" placeholder="Username" onChange={this.update("username")} value={this.state.username} />
                                    <input className="input" type="password" placeholder="Password" onChange={this.update("password")} value={this.state.password} />
                                    <br />
                                    <button className="button" onClick={this.handleSubmit}>Log in</button>
                                    <hr className="line" />
                                    <span className="or"> or</span>
                                    <button className="button" onClick={this.handleDemoSubmit}>Demo log in</button>
                                    <ul className="errors">{errors}</ul>
                                </div>
                            </form>
                            <form className="session-right-2">
                                Don't have an account? <Link className="link" to="/signup">Sign up</Link>
                                

                            </form>
                        </div>
                    </div>
                    <Footer/>
                </main>
            )
        } else if (this.props.formType === 'signup') {
            return (
                <main className="all">
                    <div className="content">
                        
                        <div className="session">
                            <form className="session-right-1">
                                <img className="logo" src={window.logo} />
                                <p className="subtitle">Sign up to see photos and videos from your friends.</p>
                                <div className="input-all">
                                    <input className="input" placeholder="Email" type="email" onChange={this.update("email")} value={this.state.email} />
                                    <input className="input" type="text" placeholder="Username" onChange={this.update("username")} value={this.state.username} />
                                    <input className="input" type="password" placeholder="Password" onChange={this.update("password")} value={this.state.password} />
                                    <br />
                                    <button className="button" onClick={this.handleSubmit}>Sign Up</button>
                                    <hr className="line" />
                                    <span className="or"> or</span>
                                    <button className="button" onClick={this.handleDemoSubmit}>Demo log in</button>
                                    <ul className="errors">{errors}</ul>
                                </div>
                            </form>
                            <form className="session-right-2">
                                Have an account? <Link className="link" to="/login">Log in</Link>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </main>
            )
        }  else if (this.props.formType === 'logout') {
            return (
                <div>
                    <SplashContainer />
                </div>
            )
        }
    };
}


export default SessionForm;