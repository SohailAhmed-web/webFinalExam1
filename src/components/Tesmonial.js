import React from "react";
import "./testmonial.css";
import testmoimg from '../assets/imgs/testmoimg.png';



const Tesmonial = () =>{
    return (
        <div className="testmonial-bg">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12">
                        <p>Testimonials</p>
                        <h1>What People Are Saying</h1>
                        <p>Multi chain interoperability</p>
                        <img src={testmoimg} alt="testmonial imag" height="500px" width="500px" className="mt-4"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center">
                        <p className="test-text">
                            “Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.”

                            <br/> <br/> - Sophie Adderiy
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default Tesmonial;