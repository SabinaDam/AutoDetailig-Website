import React from 'react'
import BilplejeVideo from "../assets/images/Untitled design2.mp4"

const BilplejeComp = () => {
return (
        <div className="bilpleje">
            <div className="container">
                <video className="intro-video" src={BilplejeVideo} autoPlay loop muted alt="video"></video>
            </div>
                <div className="content">
                    <h1>Bilpleje</h1>
                </div>  
            </div>
)
}

export default BilplejeComp
