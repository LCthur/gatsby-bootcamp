import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return(
        <div>
            <h1 className="title"> Loïc Thurre</h1>
            <p>Hey, I'm Loïc a biology student and tech enthusiast</p>
            <Link to="/contact">Me contacter</Link>
        </div>   
    )
}

export default About