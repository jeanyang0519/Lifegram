import React from 'react';

class Footer extends React.Component {
    render() {
        return (

        <div className="footer-container">
            <div className="footer-all">
                <a href="https://jeanyang0519.github.io/jeanyang0519/" rel="noopener noreferrer" target="_blank">ABOUT ME</a>
                <a href="https://www.linkedin.com/in/jean-yang-327497156" rel="noopener noreferrer" target="_blank">LINKEDIN</a>
                <a href="https://github.com/jeanyang0519" rel="noopener noreferrer" target="_blank">GITHUB</a>
                {/* <a href="https://angel.co/jean-yang-5" rel="noopener noreferrer" target="_blank">ANGEL LIST</a> */}
                <div onClick={() => (this.props.openModal('policy'))}>POLICY</div>
                <span className="span" href="#">© 2019 LIFEGRAM FROM JEAN YANG</span>
            </div>
        </div>
        )
    }
}

export default Footer;