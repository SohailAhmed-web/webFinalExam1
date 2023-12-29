import React from 'react';
import './web3dapps.css';
import web3appsimg from '../assets/imgs/web3dapps.png'

const Web3Dapps = () => {
    return (
        <div className="web3bg">
            <div className="container">
                <div className="web3dapps-container ">
                    <div className="left-column col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        <img src={web3appsimg} alt="Descriptive Alt Text" />
                    </div>
                    <div className="right-column col-sm-12 col-md-12 col-xl-3 col-lg-3">
                        <h1 className="mt-4 mb-4">Can be changed to customizable ready made web3 dapps templates.</h1>
                        <p>01 NFT (ERC721)</p>
                        <p>02 DEFI</p>
                        <p>03 Smart Contracts</p>
                        <p>04 GameFi</p>
                        <p>05 Metaverse</p>
                        <button className="start-building-btn mt-4 mb-4">Start Building</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Web3Dapps;
