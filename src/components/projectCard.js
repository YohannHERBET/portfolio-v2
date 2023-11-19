import { Card, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Img from 'gatsby-image';

const ProjetCard = ({
    image,
    alt,
    title,
    description,
    technos,
    detailedDescription,
    process,
    conceptionChoices,
    challenges,
    github,
    site,
    but,
}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    // Buttons in the footer of the modal, conditioned by github link or website.
    const conditionedButtons = [
        {
            href: github.hrefFront,
            text: 'Github du Front',
            show: github.hrefFront !== '' && github.hrefBack !== '',
        },
        {
            href: github.hrefBack,
            text: 'Github du Back',
            show: github.hrefFront !== '' && github.hrefBack !== '',
        },
        {
            href: github.href,
            text: 'Voir le Github',
            show: github.href !== '',
        },
        {
            href: site,
            text: but ? 'Le site but-cuisines.fr' : 'Voir le site',
            show: site !== undefined && site !== '',
        },
        {
            href: but,
            text: 'Le site but.fr',
            show: but !== undefined,
        },
    ];


    return (
        <article>
            <Card onClick={handleShow} className="mb-5 mx-2 card-project" id={`#${title.split(' ').join('-')}`}>
                <Card.Link href={`#${title.split(' ').join('-')}`} style={{ textDecoration: 'none' }}>
                    <Img fluid={image} alt={alt} className="card-project__img-top" />
                    <Card.Body className="card-project__body d-flex flex-column justify-content-between" style={{ height: '16rem' }}>
                        <>
                            <Card.Title className="text-center card-project__title">{title}</Card.Title>
                            <Card.Text className="card-project__text">{description}</Card.Text>
                            <Button
                                style={{
                                    background: 'rgb(162 185 255 / 0%)',
                                    color: '#d2dcff',
                                    border: 'none',
                                    width: '100%',
                                }}
                                className="d-flex justify-content-center card-project__button mb-3"
                            >
                                En savoir plus
                            </Button>
                        </>
                    </Card.Body>
                </Card.Link>
            </Card>

            <Modal show={show} onHide={handleShow} size="lg" centered className={`${show ? 'modal-appear' : '', 'modal-project'}`}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-0">
                    <Img
                        width="100%"
                        height="auto"
                        fluid={image}
                        alt={alt}
                        style={{
                            width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto',
                        }}
                        className="mb-3"
                    />
                    {detailedDescription && (
                        <>
                            <h5>Description détaillée</h5>
                            <p>
                                {detailedDescription}
                            </p>
                        </>
                    )}
                    {process && (
                        <>
                            <h5>Processus de développement</h5>
                            <p>
                                {process}
                            </p>
                        </>
                    )}
                    {conceptionChoices && (
                        <>
                            <h5>Choix de conception</h5>
                            <p>
                                {conceptionChoices}
                            </p>
                        </>
                    )}
                    {challenges && (
                        <>
                            <h5>Challenges</h5>
                            <p>
                                {challenges}
                            </p>
                        </>
                    )}
                    <h5>Technologies utilisées</h5>
                    <p>{technos.join(', ')}</p>
                </Modal.Body>
                <Modal.Footer className="pt-0 d-flex flex-column-reverse flex-md-row align-items-md-start">
                    <span
                        className="mb-3"
                        onClick={handleShow}
                        rel='noreferrer noopener'
                    >
                        Retour
                    </span>
                    {conditionedButtons.map((button, index) => (
                        button.show && (
                            <Button
                                key={[index]}
                                className="mb-3"
                                href={button.href}
                                variant="primary"
                                rel='noreferrer noopener'
                                target="_blank"
                            >
                                {button.text}
                            </Button>
                        )
                    ))}
                </Modal.Footer>
            </Modal>
        </article>
    );
};

export default ProjetCard;
