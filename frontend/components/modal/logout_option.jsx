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
                <div className="option-1" onClick={this.handleLogout}>Log Out</div>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>    
            </div>
        )
    }
}
export default LogoutOption;