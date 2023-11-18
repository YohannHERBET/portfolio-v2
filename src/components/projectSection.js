import { Row, Col } from 'react-bootstrap';
import ProjetCard from './projectCard';
import projets from '../utils/data';
import './project.scss';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectSection = () => {

    const data = useStaticQuery(graphql`
        query {
          orecipes: file(relativePath: { eq: "orecipes.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          portfolio: file(relativePath: { eq: "portfolio.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          portfoliov2: file(relativePath: { eq: "portfoliov2.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          codetonasso: file(relativePath: { eq: "codetonasso.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          organize: file(relativePath: { eq: "organize.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          useradgents: file(relativePath: { eq: "useradgents.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          but: file(relativePath: { eq: "but.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          robotEcrous: file(relativePath: { eq: "robot-ecrous.png" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          robotEcrou: file(relativePath: { eq: "robot-ecrou.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          perig: file(relativePath: { eq: "perig.webp" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)

    const projectWithImg = projets.map((projet) => {
        return {
            ...projet,
            image: data[projet.img].childImageSharp.fluid,
        }
    })

    return  (
        <>
            <div className="anchor" id="projets" />
            <div style={{ marginTop: '100px' }} className="mx-4 container-project">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="mb-4 mt-5 text-center">Mes Projets</h1>
                    <Img className="mb-3 robot-project" fluid={data.robotEcrou.childImageSharp.fluid} alt="un robot qui cherche un écrou" />
                </div>
                <Row>
                    {projectWithImg.map((projet, index) => (
                        <Col key={[index]} className="mb-5 mt-3 d-flex justify-content-center">
                            <ProjetCard {...projet} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
};

export default ProjectSection;
