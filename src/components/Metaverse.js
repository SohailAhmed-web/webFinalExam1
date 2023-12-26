import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import metaverseimg from "../assets/imgs/metaverseimg.png";
import "./metaverse.css";
const Metaverse = () => {
    return (
       <div className="metavers-bg">
           <div className="container">
               <div className="row d-flex justify-content-end align-items-center">

                   <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                       <img src={metaverseimg} alt="metaverse" height="auto" width="100%"/>
                   </div>

                   <div className=" d-flex flex-column col-sm-12 col-md-12 col-lg-6 col-xl-6 justify-content-start align-items-center mr-4 ">
                       <h1 className="mt-4">Start a <br/> free trial <br/> today</h1>
                       <p className="mt-4">No credit card required.</p>
                       <button className="start-building-btn-b mt-4">Start Building</button>

                   </div>

               </div>

           </div>

       </div>
    );
}

export default Metaverse;
