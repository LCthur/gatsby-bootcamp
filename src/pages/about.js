import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import Header from '../components/header'

const About = () => {
    return(
        <div>
            <Header />
            <h1 className="title"> Loïc Thurre</h1>
            <p>Hey, I'm Loïc a biology student and tech enthusiast</p>
            <Link to="/contact">Me contacter</Link>
            <Footer />
        </div>   
    )
}

export default About