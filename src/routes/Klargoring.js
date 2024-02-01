import React from 'react'
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgBil from '../components/HeroImgBil';
import KlargoringPrice from '../components/KlargoringPrice';



const Klargoring = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="Klargoring" text="nb"/>
      <KlargoringPrice />
      <Footer />
    </div>
  )
}

export default Klargoring
