import "./HeroImgKlarStyles.css";
import Klarvid from "../assets/images/Klarvid.mp4";




import React, { Component } from 'react';

class HeroImgKlar extends Component {
  render() {
    return (
      <div className="hero-img1">
        <video className="intro-video" src={Klarvid} autoPlay loop muted alt="video"></video>
        <div className="heading1">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}




export default HeroImgKlar
