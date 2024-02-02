import "./HeroImgSynStyles.css";
import Synvid from "../assets/images/ServiceSyn.mp4";




import React, { Component } from 'react';

class HeroImgSyn extends Component {
  render() {
    return (
      <div className="hero-img1">
        <video className="intro-video" src={Synvid} autoPlay loop muted alt="video"></video>
        <div className="heading1">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}




export default HeroImgSyn;
