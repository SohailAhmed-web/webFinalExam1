import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './herosection.css'; // Import your CSS file for additional styling
import heroImg from '../assets/imgs/heroimg.png'
import playbutton from '../assets/imgs/playbutton.png'

const Herosection = () => {
    return (
        <div className="hero-background">
            <Container className="text-center hero-container">
                <Row>
                    <Col>
                        <h1>Web3Makr Redefining <br/>How You Create</h1>
                        <h6>Unlock the blockchain potential to create <br/>Web3 Applications</h6>
                        <div className="d-flex justify-content-center align-items-center"> <img src={playbutton}   alt="Descriptive Alt Text" className="play-button"  /></div>


                        {/* Replace 'path-to-your-image.png' with your image path */}
                        <img src={heroImg}  alt="Descriptive Alt Text" className="hero-image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Herosection;
