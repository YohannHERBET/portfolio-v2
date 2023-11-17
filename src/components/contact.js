import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Form, Button, Col } from 'react-bootstrap';

const ContactForm = () => {

    const data = useStaticQuery(graphql`
        query {
          imgLinkedinHorizontal: file(relativePath: { eq: "linkedin-horizontal.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imgGithubHorizontal: file(relativePath: { eq: "github-horizontal.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    `)
    const [info, setInfo] = useState(false);
    const [messageInfo, setMessageInfo] = useState('');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        object: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            emailjs.sendForm('service_27y7r8k', 'template_dhnwowh', e.target, 'G-267E6MBSHMtIPFf')
                .then(() => {
                    setMessageInfo('Votre message a bien été envoyé.');
                    setInfo(true);
                })
                .catch(() => {
                    setMessageInfo('Une erreur est survenue, veuillez réessayer.');
                    setInfo(true);
                });
        }
        else {
            setMessageInfo('Veuillez remplir tous les champs correctement.');
            setInfo(true);
        }
        setFormState({
            name: '',
            email: '',
            object: '',
            message: '',
        });
    };

    return (
        <div className="contact-form-container">
            <div className="anchor" id="contact" />
            <Form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-100">
                <h1 className="mb-4 text-center">Contact</h1>
                <div className="d-flex w-75 w-md-50 justify-content-center mb-5">
                    <a className="logo-horizontal" href="https://github.com/YohannHERBET/" target="_blank" rel="noreferrer">
                        <Img fluid={data.imgGithubHorizontal.childImageSharp.fluid} alt="logo de github" />
                    </a>
                    <span className="invisible mx-2"></span>
                    <a className="logo-horizontal" href="https://www.linkedin.com/in/yohannherbet/" target="_blank" rel="noreferrer">
                        <Img fluid={data.imgLinkedinHorizontal.childImageSharp.fluid} alt="logo de linkedin" />
                    </a>
                </div>
                <h4 className="mb-4 text-center">Envoyer un email :</h4>
                <Form.Group controlId="name" as={Col} xs="12" md="8" lg="6" className="mb-3">
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control type="text" name="name" value={formState.name} onChange={handleChange} required minLength="2" />
                </Form.Group>

                <Form.Group controlId="email" as={Col} xs="12" md="8" lg="6" className="mb-3">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" name="email" value={formState.email} onChange={handleChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                </Form.Group>

                <Form.Group controlId="object" as={Col} xs="12" md="8" lg="6" className="mb-3">
                    <Form.Label>Objet :</Form.Label>
                    <Form.Control type="text" name="object" value={formState.object} onChange={handleChange} required />
                </Form.Group>

                <Form.Group controlId="message" as={Col} xs="12" md="8" lg="6">
                    <Form.Label>Message :</Form.Label>
                    <Form.Control as="textarea" name="message" value={formState.message} onChange={handleChange} required minLength="10" />
                </Form.Group>
                {info && (
                    <Form.Text className={`mt-3 ${messageInfo === 'Votre message a bien été envoyé.' ? 'asSuccess' : 'asError'}`}>
                        { messageInfo }
                    </Form.Text>
                )}
                <Button type="submit" className="form-button mt-4">Envoyer</Button>
            </Form>
        </div>
    );
};

export default ContactForm;
