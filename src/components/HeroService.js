import "./HeroServiceStyles.css"
import React from 'react'
import ServiceVid from "../assets/images/servicevid.mp4"

const HeroService = () => {
 
return (
    <div className='hero-img'>
        <video className='intro-video' src={ServiceVid} autoPlay loop muted alt='video'></video>
        <div className='heading'>
            <h1>SERVICE</h1>
            <p>Oplev professionel bilvedligeholdelse hos os! Vores erfarne 
               team af mekanikere er dedikeret til at holde din bil i 
               optimal stand. Vi tilbyder omfattende serviceydelser, 
               herunder olieskift, bremsekontrol, dækrotation og meget mere.</p>
        </div>
    </div>
    )
}

export default HeroService
