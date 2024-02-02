import "./HeroImgHujlStyles.css";
import Hujlvid from "../assets/images/daekSkift.mp4";




import React, { Component } from 'react';

class HeroImgHujl extends Component {
  render() {
    return (
      <div className="hero-img1">
        <video className="intro-video" src={Hujlvid} autoPlay loop muted alt="video"></video>
        <div className="heading1">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}




export default HeroImgHujl
