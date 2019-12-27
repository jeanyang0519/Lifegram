import React from 'react';
import { Link } from 'react-router-dom';

class ShowOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.closeModal();
    }



    render() {
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="option-1" onClick={this.handleClick}>Go Back to Home Page</div>
                </Link>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>
            </div>
        )
    }
}
export default ShowOption;