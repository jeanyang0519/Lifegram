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

   

    // handleSubmit() {
    //     const formData = new FormData();
    //     formData.append('post[photo]', this.state.files[0]);
           
    //     this.setState({ image: file }, () => {
    //         this.props.createPost(formData)
    //         .then(
    //             image => { that.setState({ uploading: false, image }) }
    //         );
            
    //     });
    // }

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