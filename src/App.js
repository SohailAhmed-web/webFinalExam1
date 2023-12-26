
import './App.css';
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import PartnersScrollView from "./components/PartnersScrollView";
import MasterPieceSection from "./components/MasterPieceSection";
import Web3Dapps from "./components/Web3Dapps";
import Future from "./components/Future.js";
import  Tesmonial from "./components/Tesmonial.js";
import React from "react";
import Frequently from "./components/Frequently";
import ScrollableCards from "./components/ScrollableCards";
import Metaverse from "./components/Metaverse";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Herosection/>
        <PartnersScrollView/>
      <MasterPieceSection/>
        <Web3Dapps/>
        <Future/>
        <Tesmonial/>
        <Frequently/>
      <ScrollableCards/>
        <Metaverse/>
        <Footer/>
    </div>
  );
}

export default App;
