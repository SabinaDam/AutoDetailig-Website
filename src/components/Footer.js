import "./FooterStyles.css";
import { FaFacebook, 
    FaHome, 
    FaInstagram, 
    FaMailBulk, 
    FaPhone, 
    FaTiktok} from "react-icons/fa";


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <div>
                    <p>Middlefartvej 491, </p>
                    <p>5491 Blommenslyst</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
            +45 71 10 01 16 </h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                jdautoteknik@outlook.com
                </h4>
            </div>
        </div>
        <div className="right">
          <h4>Følg os på sociale medier</h4>
          <div className="social">
            <a href="https://www.facebook.com/jdautoteknik" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} style={{color:"#fff", marginRight: "1rem"}} />
            </a>
            <a href="https://www.instagram.com/jdautoteknik/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} style={{color:"#fff", marginRight: "1rem"}} />
            </a>
            <a href="https://www.tiktok.com/@jdautoteknik" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={20} style={{color:"#fff", marginRight: "1rem"}} />
            </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
