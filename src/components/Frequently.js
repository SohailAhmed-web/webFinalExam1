import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import "./frequently.css";

const Frequently = () => {
    return (
        <Container className="frequently-con">
            <Row>
                <Col md={6}>
                    <h1>Frequently <br/> asked questions</h1>
                    <h6>Have a question? Check out our <br/> frequently asked questions to<br/> find your answer.</h6>
                </Col>
                <Col md={6}>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Web3Makr and what does it do?</Accordion.Header>
                            <Accordion.Body>
                                Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why should I use Web3Mkr?</Accordion.Header>
                            <Accordion.Body>
                                Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is Web3Makr and what does it do?</Accordion.Header>
                            <Accordion.Body>
                                Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row className="our-blog">
                <h1>Our blog</h1>
            </Row>
        </Container>
    );
}

export default Frequently;
