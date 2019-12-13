import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: [],
            uploading: false
        }

        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleImage = this.handleImage.bind(this)
    }

   

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {

            formData.append('post[photo]', this.state.photoFile);
        }
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    // handleImage(e) {
    //     e.preventDefault();
    //     this.setState({ files: e.currentTarget.files }, this.handleSubmit)
    // }

    handleImage() {
        // const file = e.target.files[0];
        // const fileReader = new FileReader();
        // fileReader.onloadend = () => {
        //     this.setState({ photo: file, preview: fileReader.result });
        // };

        // if (file) {
        //     fileReader.readAsDataURL(file);
        // }

        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }



    handleCancel() {
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                
                <label htmlFor="upload">Upload
                <input type="file" accept="image/*" onChange={this.handleImage} />
                <img src="" height="200" alt="image preview"/>
                </label>
            </div>
        )
    }
}

export default PostForm;