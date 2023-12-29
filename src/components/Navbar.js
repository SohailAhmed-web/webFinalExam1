import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import Bootstrap components
import './navbar.css';
import logoImg from '../assets/imgs/logo-manerh.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img src={logoImg} alt="Logo" height="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#web3makr">Web3Makr</Nav.Link>
                    <Nav.Link href="#whitepaper">White Paper</Nav.Link>
                    <Nav.Link href="#service">Service</Nav.Link>
                    <Nav.Link href="#tools">Tools</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    <Nav.Link href="#start-free"><button className="start-free-btn">Start For Free</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
