import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import './ScrollableCards.css'; // Import the CSS for styling
import img1 from '../assets/imgs/img1.jpeg'

import img2 from '../assets/imgs/img2.jpeg'

import img3 from '../assets/imgs/img3.jpeg'

import img4 from '../assets/imgs/img4.jpeg'
// Define the card data
const cardData = [
    {
        img: img1,
        readTime: 'Product . 10 minutes read',
        title: '6 Creative Ways to Use Repeat Grids in Adobe XD',
        description: 'Create screens directly in Method or add your images from Sketch or Figma. '
    },
    {
        img: img2,
        readTime: '6 minutes read',
        title: 'Analytics Features to Improve User Experience      ',
        description: 'Create screens directly in Method or add your images from Sketch or Figma. '
    },

    {
        img: img3,
        readTime: '15 minutes read',
        title: 'The Design Side Of Conversion Rate Optimization',
        description: 'Create screens directly in Method add your images from Sketch or Figma. '
    },

    {
        img: img4,
        readTime: '6 minutes read',
        title: 'Analytics Features to Improve User Experience ',
        description: 'Create screens directly in Method or add your images from Sketch or Figma.'
    },

    {
        img: img1,
        readTime: 'Product . 10 minutes read',
        title: '6 Creative Ways to Use Repeat Grids in Adobe XD',
        description: 'Create screens directly in Method or add your images from Sketch or Figma. '
    },
    {
        img: img2,
        readTime: '6 minutes read',
        title: 'Analytics Features to Improve User Experience      ',
        description: 'Create screens directly in Method or add your images from Sketch or Figma. '
    },

    {
        img: img3,
        readTime: '15 minutes read',
        title: 'The Design Side Of Conversion Rate Optimization',
        description: 'Create screens directly in Method add your images from Sketch or Figma. '
    },

    {
        img: img4,
        readTime: '6 minutes read',
        title: 'Analytics Features to Improve User Experience ',
        description: 'Create screens directly in Method or add your images from Sketch or Figma.'
    },



];

const ScrollableCards = () => {
    return (
        <Container fluid className="scrollable-cards-container">
            <Row className="scrollable-cards-row">
                {cardData.map((card, idx) => (
                    <Card key={idx} className="scrollable-card">
                        <Card.Img variant="top" src={card.img} />
                        <Card.Body>
                            <p>{card.readTime}</p>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
};

export default ScrollableCards;
