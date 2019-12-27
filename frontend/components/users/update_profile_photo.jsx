import React from 'react';

class UpdateProfilePhoto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null
        }

        
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () =>
            this.setState({ photoFile: file, photoUrl: reader.result });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e) {
        
        e.preventDefault();
        const formData = new FormData();

        

        if (this.state.photoFile) {

            formData.append('user[profile_photo]', this.state.photoFile);
        }
        
        this.props.updateUserPhoto(this.props.user.id ,formData)
            .then(() => {
                this.setState({
                   
                    photoFile: null,
                    photoUrl: null
                });


                this.props.closeModal()
            })

    }





    handleCancel() {
        this.props.closeModal();
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        if (this.state.photoFile === null) {
            return (
                <div className="edit-updload-form">
                    <img className="edit-icon" src={window.user} />
                    <div className='edit-message'>
                        <p>Upload a Profile Photo</p>
                        <span>Share with your friends</span>
                    </div>
                    <label htmlFor="file-upload" className="edit-upload-button">
                        Upload
                        <input id="file-upload" type="file" accept="image/*" onChange={this.handleFile} />
                    </label>


                </div>
            )
        } else {
            return (
                <div className="edit-updload-form">
                    <div className="edit-preview">{preview}</div>
                    

                    <button className="edit-submit-button" onClick={this.handleSubmit}>Submit</button>


                    
                </div>
            )
        }
    }
}

export default UpdateProfilePhoto;