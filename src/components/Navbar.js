import React from 'react';
import './navbar.css'; // Assuming you have a CSS file for styles
import logoImg from '../assets/imgs/logo-manerh.png'


const NavBar = () => {
    return (
            <nav className="navbar d-flex align-items-center">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo" height="130px" width="100px" />
                </div>
                <ul className="nav-items d-flex align-items-center mt-3">
                    <li><a href="#web3makr">Web3Makr</a></li>
                    <li><a href="#whitepaper">White Paper</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><button className="start-free-btn btn-info">Start For Free</button></li>
                </ul>
            </nav>

    );
}

export default NavBar;
