import React from 'react';

import "./HeroFeedbackStyles.css";
import FeedbackVid from "../assets/images/feedback-dark.mp4"
import OwlCarousel from './OwlCarousel'
const HeroFeedback = () => {
  return (
    <div className='hero-img'>
      <video className='intro-video' src={FeedbackVid} autoPlay loop muted alt='video'></video>
      <div className='heading'>
        <h1>FEEDBACK</h1>
      </div>
      <div>
        <OwlCarousel />
      </div>
    </div>
  );
};

export default HeroFeedback;
