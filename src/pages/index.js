import React from 'react'
import { Link } from 'gatsby' //Link is a react component with to props

import Layout from '../components/layout'

const IndexPage = () => {
    return(
        <Layout>
            <h1>Salut,</h1>
            <h2>Je m'appelle Loïc et je suis dev</h2>
            <p>Me contacter<Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage    