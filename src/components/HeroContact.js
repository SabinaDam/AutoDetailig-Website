import React from 'react'
import "./HeroContactStyles.css"
import ContactVid from "../assets/images/contact.mp4"

const HeroContact = () => {
  return (
    <div className='hero-img'>
        <video className='intro-video' src={ContactVid} autoPlay loop muted alt='video'></video>
        <div className='heading'>
            <h1>KONTAKT OS</h1>
            <p>Let's talk about your car.</p>
        </div>
    </div>
  )
}

export default HeroContact
