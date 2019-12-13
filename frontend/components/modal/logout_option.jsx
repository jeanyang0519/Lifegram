import React from 'react';


class LogoutOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.logout();
        this.props.closeModal();
    }

    

    render() {
        return (
            <div>
                <div className="logoutOption" onClick={this.handleLogout}>Log Out</div>
                <div className="cancelOption" onClick={() => (this.props.closeModal())}>Cancel</div>    
            </div>
        )
    }
}
export default LogoutOption;