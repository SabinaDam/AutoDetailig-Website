import React from 'react'
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgBil from '../components/HeroImgBil';
import PolishPrice from '../components/PolishPrice';



const Polering = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="Polering af Bil"/>
      <PolishPrice />
      <Footer />
    </div>
  )
}

export default Polering
