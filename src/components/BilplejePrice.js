import React from 'react'
import { Link } from "react-router-dom";
import "./BilplejePriceStyles.css";



const BilplejePrice = () => {
  return (
    <div className="bilplejeP">
      <div className="card-container-pri">
        <div className="card-klar">
            <h3>- Bronze -</h3>
            <span className="bar"></span>
            <p className="btc">fra 300 ,-</p>
            <p>Førvask med højtrykrenser</p>
                <p>- Ridsefri handvask -</p>
                <p>- Insekt fjernes -</p>
                <p>- Fælge vaskes -</p>
       
                <Link to="/kontakt" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Silver -</h3>

            <span className="bar"></span>
            <p className="btc">fra 600 ,-</p>
            <p>Førvask med højtrykrenser</p>
                <p>- Ridsefri handvask -</p>
                <p>- Insekt fjernes -</p>
                <p>- Fælge vaskes -</p>
                <p>- Dørfalser vaskes -</p>
           
                <Link to="/kontakt" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
            <h3>- Gold -</h3>
            <span className="bar"></span>
            <p className="btc">fra 1000 ,-</p>
            <p>Førvask med højtrykrenser</p>
                <p>- Ridsefri handvask -</p>
                <p>- Insekt fjernes -</p>
                <p>- Fælge vaskes -</p>
            
                <Link to="/kontakt" className="btn">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default BilplejePrice;
