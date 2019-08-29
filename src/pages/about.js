import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const About = () => {
    return(
        <Layout>
            <h1 className="title"> Loïc Thurre</h1>
            <p>Hey, I'm Loïc a biology student and tech enthusiast</p>
            <Link to="/contact">Me contacter</Link>
        </Layout>
    )
}

export default About