import "./HeroImgSynStyles.css";
import Fejlvid from "../assets/images/FejlFinder.mp4";




import React, { Component } from 'react';

class HeroImgFejl extends Component {
  render() {
    return (
      <div className="hero-img1">
        <video className="intro-video" src={Fejlvid} autoPlay loop muted alt="video"></video>
        <div className="heading1">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}




export default HeroImgFejl;