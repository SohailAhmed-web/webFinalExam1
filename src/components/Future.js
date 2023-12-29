import React from 'react';
import futureimg1 from '../assets/imgs/futureimg1.png'
import futureimg2 from '../assets/imgs/futureimg2.png'
import futureimg3 from '../assets/imgs/futureimg3.png'
import futureimg4 from '../assets/imgs/futureimg4.png'
import futureimg5 from '../assets/imgs/futureimg5.png'
import futureimg6 from '../assets/imgs/futureimg6.png'
import  './future.css'


const Future = () =>{
    return(
        <div className="future-bg">
            <div className="container ">
                <div className="row d-flex justify-content-center align-items-center text-center mt-4">
                    <h1>The Future of Web3 NoCode</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center text-center mt-4">
                    <h6>Web3Makr allows you to incorporate top ranked blockchain platforms into your work through the drag and drop feature.</h6>
                </div>
                <div className="row row-of-future">
                    <div className=" col-xl-3 col-lg-3 col-md-12 col-sm-12 d-block">
                        <h3>Multi-chain</h3>
                        <p>Dashboard</p>
                        <p>Tools</p>

                    </div>
                    <div className="col-xl-9 col-9 col-sm-12 col-md-12">
                        <div className="d-flex justify-content-evenly align-items-center text-center">
                            <div className=" col-xl-3 col-lg-3">
                                <img src={futureimg1} alt="future image" height="200px" width="200px"/>
                                <h6 className="mt-2">Metamask Support</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <img src={futureimg2} alt="future img" height="200px" width="200px" />
                                <h6 className="mt-2">NFT Search</h6>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <img src={futureimg3} alt=" future image" height="200px" width="200px"/>
                                <h6 className="mt-2">Moralis Integration</h6>
                            </div>

                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-evenly align-items-center text-center mt-4 mb-4">
                                <div className=" col-xl-3 col-lg-3">
                                    <img src={futureimg4} alt="future image" height="200px" width="200px"/>
                                    <h6 className="mt-2">Solidity</h6>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <img src={futureimg5} alt="future img" height="200px" width="200px" />
                                    <h6 className="mt-2">Ether.js</h6>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <img src={futureimg6} alt=" future image" height="200px" width="200px"/>
                                    <h6 className="mt-2">Hardhat</h6>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default  Future;