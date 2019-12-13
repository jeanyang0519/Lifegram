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
            <div className="modal-background">
                <div className="modal-child">
                    <div className="logoutOption" onClick={this.handleLogout}>Log Out</div>
                    <div className="canealOption" onClick={this.props.closeModal}>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}
export default LogoutOption;