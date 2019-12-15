import React from 'react';
// import { Redirect } from 'react-router-dom';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            location: '',
            photoFile: null,
            photoUrl: null
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleFile(e) {
        // debugger
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
        // debugger
        formData.append('post[body]', this.state.body);
        formData.append('post[location]', this.state.location);
        // debugger
        if (this.state.photoFile) {
            // debugger
            formData.append('post[photo]', this.state.photoFile);
        }
        // debugger
        this.props.createPost(formData)
            .then( () => {
                this.setState({
                    body: '',
                    location: '',
                    photoFile: null,
                    photoUrl: null
                });
                // debugger
                // <Redirect to="/"/>
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
                <div>
                    <h3>Upload a Photo</h3>
                    <label htmlFor="photo">
                        <h3>Upload</h3>
                        <input type="file" accept="image/*" onChange={this.handleFile} />
                    </label>
                </div>
            )
        } else {
            return (
                <div>
                    {preview}
                    <input type="text" value={this.state.location} placeholder="Add location" onChange={this.handleInput('location')}/>
                    <textarea value={this.state.body} placeholder="Write a caption..." onChange={this.handleInput('body')}></textarea>
                    <button onClick={this.handleSubmit}>Post</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>
            )
        }
    }
}

export default PostForm;