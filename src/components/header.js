import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return(
        <div>
            <h1>Loïc Thurre's first gatsby site</h1>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>  
                <li><Link to="/">Homepage</Link></li>
            </ul>
        </div>
    )
}

export default Header