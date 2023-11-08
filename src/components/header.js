import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby';
import './header.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
      imgHeader: file(relativePath: { eq: "img-header.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

    return (
        <header style={{padding: "3rem"}} id="home">
            <Navbar
                collapseOnSelect
                style={{
                    backgroundColor: '#023047',
                    boxShadow: 'rgb(37 65 92 / 34%) 0px 0px 40px',
                    borderBottom: "12px solid rgb(7 33 45 / 62%)"
                }}
                fixed="top"
                expand="md"
            >
                <div></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="align-items-center w-100 justify-content-center">
                        <div className="container-links d-flex flex-column flex-md-row align-items-center">
                            <Nav.Link as={Link} to="#home" className="text-yellow mx-md-4">Accueil</Nav.Link>
                            <Nav.Link as={Link} to="#about" className="text-yellow mx-md-4">À propos</Nav.Link>
                            <Nav.Link as={Link} to="#home">
                                <Img className="header-img mx-md-4" fluid={data.imgHeader.childImageSharp.fluid} />
                            </Nav.Link>
                            <Nav.Link as={Link} to="#projets" className="text-yellow mx-md-4">Projets</Nav.Link>
                            <Nav.Link as={Link} to="#contact" className="text-yellow mx-md-4">Contact</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
