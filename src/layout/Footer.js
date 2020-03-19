import React from 'react'
import '../assets/sass/home/style.scss'
import backFooter from '../assets/img/back_footer.png'

import logo_header from '../assets/img/logo.png'

const Footer = () => {
    return (
        <div>
            <img className="footer" src={backFooter} />
        </div>
    );
}

export default Footer;