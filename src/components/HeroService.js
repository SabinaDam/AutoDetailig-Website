import "./HeroServiceStyles.css"
import React from 'react'
import ServiceVid from "../assets/images/servicevid.mp4"

const HeroService = () => {
 
return (
    <div className='hero-img'>
        <video className='intro-video' src={ServiceVid} autoPlay loop muted alt='video'></video>
        <div className='heading'>
            <h1>SERVICE</h1>
        </div>
    </div>
    )
}

export default HeroService
