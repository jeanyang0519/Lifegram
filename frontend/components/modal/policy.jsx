import React from 'react';
import { Link } from 'react-router-dom';

class PostOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.closeModal();
    }



    render() {
        return (
            <div className='policy-container'>
                <div className='policy-content'>
                    <img src={window.logo} alt=""/>
                    <div>
                        Live Your Life, Post Your Lifegram                        
                    </div>
                    <p>
                        Here at Lifegram there are no deletes or edits.
                        <br />
                        Share whatever you want, but there is no going back.
                    </p>
                </div>

            </div>
        )
    }
}



export default PostOption;