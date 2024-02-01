import React from 'react'
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgBil from '../components/HeroImgBil';
import SolfilmPrice from '../components/SolfilmPrice';

const Solfilm = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="Solfilm" text="Chose your favorite"/>
      <SolfilmPrice />
      <Footer />
    </div>
  )
}

export default Solfilm
