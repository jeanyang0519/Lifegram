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
        debugger
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
                <div className="upload-1">
                    {/* <img className="polaroid" src={window.polaroidPhoto} /> */}
                    {/* <span className="uploadsign1">Upload a Photo</span> */}

                    {/* <span className="uploadsign2">Share with your friends</span> */}
                    <label htmlFor="file-upload" className="nextbutton">
                        Upload
                        <input id="file-upload" type="file" accept="image/*" onChange={this.handleFile} />
                    </label>


                </div>
            )
        } else {
            return (
                <div className="upload-2">
                    <div className="preview">{preview}</div>
                    <div className="previewContent">
                        {/* <span className="newPost">New Post</span> */}
                        {/* <input className="addLocation" type="text" value={this.state.location} placeholder="Add location" onChange={this.handleInput('location')} /> */}
                        {/* <textarea className="body" value={this.state.body} placeholder="Write a caption..." onChange={this.handleInput('body')}></textarea> */}

                        <button className="postButton" onClick={this.handleSubmit}>Submit</button>


                    </div>
                </div>
            )
        }
    }
}

export default UpdateProfilePhoto;