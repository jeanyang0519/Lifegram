import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }

        
        this.handleImage = this.handleImage.bind(this)
    }

    handleImage(e) {
        const file = e.currentTarget.files[0];
        this.setState({ image: file }, () => {
            const formData = new FormData();
            formData.append('user[avatar]', this.state.image);
            this.props.createPost(this.props.post);
            this.setState({ image: null });
        });
    }

    // handleImage() {
    //     const formdata = new FormData();
    //     formdata.append('image', this.state.image);
 
    // }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleSelectedFile} />
                <button onClick={this.handleImage}>Upload</button>
            </div>
        )
    }
}

export default PostForm;