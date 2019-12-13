import { Link } from 'react-router-dom';
import React from 'react';
// import PostUploadContainer from '../posts/post_upload_container';
// import HeaderContainer from '../header/header_container';
import PostIndexContainer from '../posts/post_index_container';
import SplashContainer from '../splash/splash_container';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        
    }

    

    

    render() {
        // const errors = this.props.errors.map((error, i) => {
        //     return <li  key={i}>{error}</li>
        // })
        if (this.props.currentUser) {
            // debugger 
            return (
                // show user's index
                <div>
                    <div>
                        <PostIndexContainer/>
                        {/* <HeaderContainer/> */}
                        {/* <PostUploadContainer/> */}
                    </div> 
                    <div className="willbedeleted">
                        Welcome! {this.props.currentUser.username}
                        <button onClick={this.props.logout}>log out</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <SplashContainer/>
                </div>
                
            );
        }



    }
}

export default Greeting;