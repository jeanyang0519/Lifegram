import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import SplashContainer from '../splash/splash_container';

class Greeting extends React.Component {
    constructor(props) {
        super(props);        
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <div>
                        <PostIndexContainer/>
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