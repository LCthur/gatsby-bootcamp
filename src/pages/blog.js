import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    return(
        <Layout>
            <h1>Blog</h1>
            <p>Voici mes posts</p>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    console.log(edge.node.fields.slug)
                    return(
                        <li>
                            <Link to={`blog/${edge.node.fields.slug}`}>
                                <h2 key={edge.node.frontmatter.title}>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    );
                })}
            </ol> 
        </Layout>
    )
}

export default BlogPage

