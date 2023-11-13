import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './home.scss';
const Home = () => {

    const data = useStaticQuery(graphql`
        query {
          imgPhotoProfil: file(relativePath: { eq: "photo-profil.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imglogoLinkedin: file(relativePath: { eq: "linkedin.webp" }) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgLogoGithub: file(relativePath: { eq: "github.webp" }) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)

    return (
        <>
            <div className="container-mobile-socials d-flex mt-3 mt-md-4">
                <Img className="mobile-socials" fluid={data.imglogoLinkedin.childImageSharp.fluid} />
                <Img className="mobile-socials" fluid={data.imgLogoGithub.childImageSharp.fluid} />
            </div>
            <div className="w-100 py-4 my-4 py-md-5 my-md-5 d-flex justify-content-center">
                <div className="photo-container d-flex flex-column align-items-center text-center">
                    <Img className="img-profil-img" fluid={data.imgPhotoProfil.childImageSharp.fluid} />
                    <h2 className="mt-3">Hey, je suis <span>Yohann Herbet</span>,</h2>
                    <h2>développeur fullstack</h2>
                    <h5>je place l'écoute et la qualité au coeur de mon travail</h5>
                </div>
            </div>
        </>
    );
};

export default Home;
