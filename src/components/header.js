import { Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby';
import './header.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
      imgHeader: file(relativePath: { eq: "img-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

    const [expanded, setExpanded] = useState(false);

    return (
        <header style={{padding: "2.3rem"}} id="home">
            <Navbar
                collapseOnSelect
                expanded={expanded}
                style={{
                    backgroundColor: '#023047',
                    boxShadow: 'rgb(37 65 92 / 34%) 0px 0px 40px',
                    borderBottom: "12px solid rgb(7 33 45 / 62%)"
                }}
                fixed="top"
                expand="md"
            >
                <div></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} className="me-3"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="align-items-center w-100 justify-content-center">
                        <div className="container-links d-flex flex-column flex-md-row align-items-center">
                            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="text-yellow mx-md-4">Accueil</Nav.Link>
                            <Nav.Link as={Link} to="#about" onClick={() => setExpanded(false)} className="text-yellow mx-md-4">À propos</Nav.Link>
                            <Nav.Link as={Link} to="/" className="container-header-img">
                                <Img className="header-img mx-md-4" fluid={data.imgHeader.childImageSharp.fluid} />
                            </Nav.Link>
                            <Nav.Link as={Link} to="#projets" onClick={() => setExpanded(false)} className="text-yellow mx-md-4">Projets</Nav.Link>
                            <Nav.Link as={Link} to="#contact" onClick={() => setExpanded(false)} className="text-yellow mx-md-4">Contact</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
