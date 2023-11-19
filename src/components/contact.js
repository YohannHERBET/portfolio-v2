import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Form, Button } from 'react-bootstrap';

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
          imgRobotMail: file(relativePath: { eq: "robot-mail.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
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
        <section className="contact-form-container">
            <div className="anchor" id="contact" />
            <Form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-100 contact-form">
                <h2 className="mb-4 text-center">Contact</h2>
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex w-75 w-md-50 justify-content-center mb-2">
                        <a className="logo-horizontal" href="https://github.com/YohannHERBET/" target="_blank" rel="noreferrer">
                            <Img fluid={data.imgGithubHorizontal.childImageSharp.fluid} alt="logo de github" />
                        </a>
                        <span className="invisible mx-2"></span>
                        <a className="logo-horizontal" href="https://www.linkedin.com/in/yohannherbet/" target="_blank" rel="noreferrer">
                            <Img fluid={data.imgLinkedinHorizontal.childImageSharp.fluid} alt="logo de linkedin" />
                        </a>
                    </div>
                </div>
                <Img className="mb-3 robot-mail" fluid={data.imgRobotMail.childImageSharp.fluid} alt="robot qui donne le courriel" />
                <h4 className="mb-4 text-center">Envoyer un email :</h4>
                <Form.Group className="contact-form_group d-flex flex-column mb-3" controlId="name">
                    <Form.Label className="contact-form_label">Nom :</Form.Label>
                    <Form.Control className="contact-form_input" type="text" name="name" value={formState.name} onChange={handleChange} required minLength="2" />
                </Form.Group>

                <Form.Group className="contact-form_group d-flex flex-column mb-3" controlId="email">
                    <Form.Label className="contact-form_label">Email :</Form.Label>
                    <Form.Control className="contact-form_input" type="email" name="email" value={formState.email} onChange={handleChange} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                </Form.Group>

                <Form.Group className="contact-form_group d-flex flex-column mb-3" controlId="object">
                    <Form.Label className="contact-form_label">Objet :</Form.Label>
                    <Form.Control className="contact-form_input" type="text" name="object" value={formState.object} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="contact-form_group d-flex flex-column" controlId="message">
                    <Form.Label className="contact-form_label">Message :</Form.Label>
                    <Form.Control as="textarea" name="message" value={formState.message} onChange={handleChange} required minLength="10" />
                </Form.Group>
                {info && (
                    <Form.Text className={`mt-3 ${messageInfo === 'Votre message a bien été envoyé.' ? 'asSuccess' : 'asError'}`}>
                        { messageInfo }
                    </Form.Text>
                )}
                <Button type="submit" className="form-button mt-4">Envoyer</Button>
            </Form>
        </section>
    );
};

export default ContactForm;
