import React from 'react';
import './masterPieceSection.css'; // Import the CSS for styling
import masterpieceimg from '../assets/imgs/masterpieceimg.png'

const MasterPieceSection = () => {
    return (
        <div className="masterpiece-background">
            <div className="container mt-4">
                <div className="masterpiece-container d-flex justify-content-center align-items-center">
                    <div className="left-column col-sm-12 col-md-12 col-lg-3 col-xl-3 ">
                        <h1>Create your own Web3 Masterpiece</h1>
                        <p>Most entrepreneurs want to create their own web3 sites, unfortunately, they don't know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                        <button className="start-building-btn">Start Building</button>
                    </div>
                    <div className="masterPiece-right-column col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        {/* Replace 'path-to-your-image.png' with the path to your image */}
                        <img src={masterpieceimg} alt="Descriptive Alt Text" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MasterPieceSection;
