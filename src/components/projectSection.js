import { Row, Col } from 'react-bootstrap';
import ProjetCard from './projectCard';
import projets from '../utils/data';
import './project.scss';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

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
        }
    `)

    const projectWithImg = projets.map((projet) => {
        return {
            ...projet,
            image: data[projet.id].childImageSharp.fluid,
        }
    })

    return  (
        <div style={{ marginTop: '100px' }} className="anchor mx-4 container-project">
            <h1 className="mb-5 mt-5 text-center">Mes Projets</h1>
            <Row>
                {projectWithImg.map((projet, index) => (
                    <Col key={[index]} className="mb-5 mt-3 d-flex justify-content-center">
                        <ProjetCard {...projet} />
                    </Col>
                ))}
            </Row>
        </div>
    )
};

export default ProjectSection;
