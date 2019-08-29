import React from 'react'
import { Link } from 'gatsby' //Link is a react component with to props

import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return(
        <div>
            <Header />
            <h1>Salut,</h1>
            <h2>Je m'appelle Loïc et je suis dev</h2>
            <p>Me contacter<Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage    