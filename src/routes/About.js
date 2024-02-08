import React from 'react'
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgBil from '../components/HeroImgBil';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="OM OS" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
