import "./HeroImgStyles.css";
import React from 'react';
import Introvid from "../assets/images/Untitled design.mp4";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video className="intro-video" src={Introvid} autoPlay loop muted alt="video"></video>
        </div>
        <div className="content">
            <p>Welkommen til</p>
            <h1>JD Autoteknik</h1>
            <div className='row'>
        <div className='col-md-6'><Link to="/bilpleje"
                className="btn">Bilbleje</Link></div>
        <div className='col-md-6'><Link to="/service"
                className="btn">Service</Link></div>
      </div>  
    </div>
    </div>
  )
}

export default HeroImg
