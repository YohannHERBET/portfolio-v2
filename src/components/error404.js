import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Error404 = () => {

    const data = useStaticQuery(graphql`
        query {
          imgRobot404: file(relativePath: { eq: "robot-404.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)
    return (
        <div className="container-404 mt-5 pt-5 text-center d-flex flex-column align-items-center" style={{ marginBottom : '50rem' }}>
            <h1 style={{ color: '#FFB703' }}>404: Page non trouvée, tu as dû faire une erreur</h1>
            <p>Il semblerait que tous les chemins ne mènent pas à Rome.</p>
            <Img className="img-robot-404" fluid={data.imgRobot404.childImageSharp.fluid} alt="Un robot qui cherche son chemin sur une carte" />
        </div>
    )
}

export default Error404
