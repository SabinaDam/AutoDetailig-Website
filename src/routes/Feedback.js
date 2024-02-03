import React from 'react';
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroFeedback from '../components/HeroFeedback';
import OwlCarousel from '../components/OwlCarousel';

const Feedback = () => {
  return (
    <div>
      <Navbar />
      <HeroFeedback/>
      <OwlCarousel />
      <Footer />
    </div>
  )
}

export default Feedback
