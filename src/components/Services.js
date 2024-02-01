import "./ServicecStyles.css";
import React from 'react';
import pro1 from "../assets/images/image2.png";
import { Link } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="vask"/>
          <h2 className="project-title">Bilvask</h2>
          <div className="pro-details">
            <p>Ligesom normal bilvoks og lakforsegling, så er produktet sammensat til at 
              tilføre lakken en effektiv afperlingseffekt af vand og andre elementer. 
            </p>
            <div>
              <Link to="/pricing" className="btn">View</Link>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro1} alt="vask"/>
          <h2 className="project-title">Polering af bilen</h2>
          <div className="pro-details">
            <p>Ligesom normal bilvoks og lakforsegling, så er produktet sammensat til at 
              tilføre lakken en effektiv afperlingseffekt af vand og andre elementer. 
            </p>
            <div>
              <Link to="/polish" className="btn">View</Link>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro1} alt="vask"/>
          <h2 className="project-title">Solfilm</h2>
          <div className="pro-details">
            <p>Ligesom normal bilvoks og lakforsegling, så er produktet sammensat til at 
              tilføre lakken en effektiv afperlingseffekt af vand og andre elementer. 
            </p>
            <div>
              <Link to="/solfilm" className="btn">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;