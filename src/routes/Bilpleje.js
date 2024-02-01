import React from 'react';
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import WorkCard from '../components/WorkCard';
import HeroImgBil from '../components/HeroImgBil';


const Bilpleje = () => {
  return (
    <div>
      <Navbar />
      <HeroImgBil heading="BILPLEJE" text="Dit bil, vores passion, perfektion garanteret"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Bilpleje
