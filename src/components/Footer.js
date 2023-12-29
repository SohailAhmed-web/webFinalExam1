import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import footerimg from '../assets/imgs/footer.png';
import "./Footer.css"
const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <img src={footerimg} alt="Footer" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
