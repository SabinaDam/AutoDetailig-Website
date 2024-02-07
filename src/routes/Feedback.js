import React from 'react';
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroFeedback from '../components/HeroFeedback';
import FeedbackForm from '../components/FeedbackForm'; 

import OwlCarousel from '../components/OwlCarousel';

const Feedback = () => {
  return (
    <div>
      <Navbar />
      <HeroFeedback/>
      <FeedbackForm />
      <OwlCarousel />
      <Footer />
    </div>
  )
}

export default Feedback
