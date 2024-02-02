import React from 'react'
import "./ServiceWorkStyles.css"
import pro1 from "../assets/images/Daek.png";
import pro2 from "../assets/images/eFTERsYN.png"
import pro3 from "../assets/images/FejlFind.png"
import { Link } from "react-router-dom";

const ServiceWork = () => {
  return (
    <div className="work-container">
    <div className="project-container">
      <div className="project-card">
        <img src={pro1} alt="vask"/>
        <h2 className="project-title">Hujl og Daekskift</h2>
        <div className="pro-details">
          <p>Hvis du ønsker, at din bil skal holde så mange år som 
             muligt, er det en god idé at få den klargjort med jævne 
             mellemrum. En klargøring af bilen sørger for, at den 
             forbliver i god stand, og det kan forlænge dens levetid.
          </p>
          <div>
            <Link to="/hujl" className="btn">View</Link>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src={pro2} alt="vask"/>
        <h2 className="project-title">Serviceeftersyn</h2>
        <div className="pro-details">
          <p>Uanset om din bil trænger til en opfriskning, fjernelse af 
             små ridser eller en fuldstændig transformation, er vores 
             bilpoleringsservice skræddersyet til at imødekomme dine 
             behov. Vi kombinerer omhyggelig håndværk med 
             professionelle produkter for at sikre, at din bil ser ud 
             som ny og beskyttet mod elementerne.
          </p>
          <div>
            <Link to="/syn" className="btn">View</Link>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img src={pro3} alt="vask"/>
        <h2 className="project-title">Fejlfindning og reparation</h2>
        <div className="pro-details">
          <p>Med vores avancerede tinting-teknikker får du ikke kun et 
             elegant look, men også beskyttelse mod skadelig solstråling 
             og mere privatliv.
          </p>
          <div>
            <Link to="/fejl" className="btn">View</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceWork
