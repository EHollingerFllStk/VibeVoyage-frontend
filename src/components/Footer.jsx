import React from 'react'
import { Link } from "react-router-dom"

 function Footer (props) {
    return (
        <div className='footer'>
            <ul className = 'footerLinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to = "/notes">Notes</Link></li> 
            <li><Link to = "/meditation">Meditation</Link></li>
            </ul>
        </div>    

    )
}

export default Footer;