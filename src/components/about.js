import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './about.scss';
const About = () => {

    const data = useStaticQuery(graphql`
        query {
          imgRobot: file(relativePath: { eq: "petit-robot.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgRobotShare: file(relativePath: { eq: "robot-partage.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgRobotCommunication: file(relativePath: { eq: "robot-communication.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgRobotWorker: file(relativePath: { eq: "robot-worker.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgRobotDeveloper: file(relativePath: { eq: "robot-developer.png" }) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)

    return (
        <div className="container-about p-3 mt-5">
            <h3 className="pt-3 pb-4 pb-lg-5">À propos</h3>
            <div className="d-flex flex-column align-items-center flex-lg-row text-lg-center mb-5 mx-5">
                <Img className="img-robot first" style={{ filter: 'drop-shadow(0 0 5px black)' }} fluid={data.imgRobot.childImageSharp.fluid} alt="un robot qui tient un outil" />
                <p className="mb-0">Passionné par mon métier, je m'intéresse particulièrement à la qualité logicielle tel un artisan du code, j'aime proposer, en accord avec les enjeux business, des solutions techniques performantes, modulaires et durables.</p>
            </div>
            <div className="d-flex flex-column align-items-center flex-lg-row-reverse text-lg-center mb-5 mx-5">
                <Img className="img-robot" style={{ filter: 'drop-shadow(0 0 1px black)' }} fluid={data.imgRobotShare.childImageSharp.fluid} alt="deux robots qui tiennent un outil ensembles" />
                <p className="mb-0">J'adore partager et travailler avec des personnes passionnées, je crois fermement au partage, à l'entraide et à la coopération.</p>
            </div>
            <div className="d-flex flex-column align-items-center flex-lg-row text-lg-center mb-5 mx-5">
                <Img className="img-robot" style={{ filter: 'drop-shadow(0 0 1px black)' }} fluid={data.imgRobotCommunication.childImageSharp.fluid} alt="deux robots qui discutent" />
                <p className="mb-0">Pour moi la communication est très importante ; l'écoute active, la force de proposition et prise d'initiatives font parties prenantes de mon travail.</p>
            </div>
            <div className="d-flex flex-column align-items-center flex-lg-row-reverse text-lg-center mb-5 mx-5">
                <Img className="img-robot" style={{ filter: 'drop-shadow(0 0 2px black)' }} fluid={data.imgRobotWorker.childImageSharp.fluid} alt="un robot qui écoute un autre robot" />
                <p className="mb-0">J'attache beaucoup d'importance à comprendre les enjeux business et les besoins des utilisateurs, afin de pouvoir proposer les bonnes solutions.</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-5 container-end">
                <span>Bref</span>
                <Img className="robot-end" fluid={data.imgRobotDeveloper.childImageSharp.fluid} alt="un robot qui tape sur un clavier pour écrire du code" />
                <span>je suis développeur</span>
            </div>
        </div>
    );
};

export default About;
