import React from 'react'
// import './EftersynCompStyles.css';
import { Link } from 'react-router-dom';
import Eftersyn from '../assets/images/eftersyn-trans.png'


const EftersynComp = () => {
  return (
    <section id="about" className="section-padding text-center">
        <div className="container">
            <div className="row">
                {/* <div className="col-12">
                    <div className="section-title">
                        <h1 className="display-4 fw-semibold">About us</h1>
                    <div className="line"></div>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div> */}
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                    <img src={Eftersyn} alt="" width="400" height="300" />
                </div>
            <div className="col-lg-5">
                <h1>Serviceeftersyn</h1>
                <p className="mt-3 mb-4">
                Her får din bil et omfattende 360 graders tjek, 
                hvor vi gennemgår 42 vitale punkter. Bl.a. 
                tjekker vi bremserne og renser dem - samt skifter
                oliefilteret og op til 4 liter kvalitetsolie.
                </p>
                <ul>
                    <li>Udskiftning af oliefilter og op til 4 liter kvalitetsolie</li>
                    <li>Kontrol af gearolie interval</li>
                    <li>Kontrol af Brændstoffilter og luftfilter</li>
                    <li>Kontrol af bremsevæskestand og kogepunkt.</li>
                    <li>Kontrol af bærearme, bærekugler, styrekugler og stabilisator</li>
                    <li>Kontrol af hjullejer</li>
                    <li>Test af bremsefunktion, herunder håndbremse, og adskillelse, rensning og smøring af bremser for og bag.</li>
                </ul>
                <Link to="/kontakt" className="btn">Få et tilbud</Link>
            </div>
            </div>
        </div>
  </section>
   
  )
}

export default EftersynComp
