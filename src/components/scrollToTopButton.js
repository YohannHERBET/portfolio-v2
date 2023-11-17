import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './scrollToTopButton.scss';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <Button
                className="scroll-to-top"
                onClick={scrollToTop}
                style={{
                    background: '#023047',
                    border: '2px solid #8ECAE6',
                }}
            >
                &#x25B2;
            </Button>
        )
    );
};

export default ScrollToTopButton;
