import React from 'react'
import  Navbar  from "../components/Navbar";
import BilplejePrice from './Bilpleje';
import Footer from "../components/Footer";
import HeroImgBil from '../components/HeroImgBil';




const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="Cleaning packages" text="Chose your favorite"/>
      <BilplejePrice />
      <Footer />
    </div>
  )
}

export default Pricing
