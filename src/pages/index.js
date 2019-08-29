import React from 'react'
import { Link } from 'gatsby' //Link is a react component

const IndexPage = () => {
    return(
        <div>
            <h1>Salut,</h1>
            <h2>Je m'appelle Loïc et je suis dev</h2>
            <p>Me contacter<Link to="/contact">Contact me.</Link></p>
        </div>
    )
}

export default IndexPage    