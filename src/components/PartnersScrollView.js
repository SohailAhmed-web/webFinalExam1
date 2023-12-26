import React from 'react';
import './partnersscrollsiew.css'; // Import the CSS file for styles
import logo1 from '../assets/imgs/logo1.png'
import logo2 from '../assets/imgs/logo2.png'
import logo3 from '../assets/imgs/logo3.png'
import logo4 from '../assets/imgs/logo4.png'
import logo5 from '../assets/imgs/logo5.png'
import logo6 from '../assets/imgs/logo6.png'
import logo7 from '../assets/imgs/logo7.png'
const PartnersScrollView = () => {
    return (
         <div className="container mt-4">

             <div className="scroll-view-container">
                 <div className="scroll-view">
                     <img src={logo1} alt="Partner Logo 1" />
                     <img src={logo2} alt="Partner Logo 2" />
                     <img src={logo3} alt="Partner Logo 3" />
                     <img src={logo4} alt="Partner Logo 4" />
                     <img src={logo5} alt="Partner Logo 5" />
                     <img src={logo6} alt="Partner Logo 6" />
                     <img src={logo7} alt="Partner Logo 7" />
                     <img src={logo3} alt="Partner Logo 1" />
                     <img src={logo1} alt="Partner Logo 2" />
                 </div>
             </div>
         </div>


    );
}

export default PartnersScrollView;
