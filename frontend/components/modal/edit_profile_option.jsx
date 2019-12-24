import React from 'react';


class EditProfileOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit() {
        // this.props.logout();
        this.props.closeModal();
    }



    render() {
        return (
            <div>
                <div className="option-1" onClick={this.handleEdit}>Edit Profile</div>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>
            </div>
        )
    }
}
export default EditProfileOption;