import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        }

        this.handleSelectedFile = this.handleSelectedFile.bind(this)
        this.handleUploadFile = this.handleUploadFile.bind(this)
    }

    handleSelectedFile() {
        return e => {
            this.setState({ selectedFile: e.target.files[0] })
        }

    }

    handleUploadFile() {
        const formdata = new FormData();
        formdata.append('image', this.state.selectedFile);
        
        
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleSelectedFile} />
                <button onClick={this.handleUploadFile}>Upload</button>
            </div>
        )
    }
}

export default UploadImage;