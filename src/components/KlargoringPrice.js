import React from 'react';
import "./KlargoringPriceStyles.css"
import { Link } from 'react-router-dom';

const KlargoringPrice = () => {
    return (
        <div className="klargorinPrice">
          <div className="card-container">
            <div className="card">
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

export default KlargoringPrice
