import "./HeroImgBilStyles.css";
import BilblejeVid from "../assets/images/bilpleje.mp4";



import React, { Component } from 'react';

class HeroImgBil extends Component {
  render() {
    return (
      <div className="hero-img">
        <video className="intro-video" src={BilblejeVid} autoPlay loop muted alt="video"></video>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}




export default HeroImgBil
