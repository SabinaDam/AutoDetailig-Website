import React from 'react';
import './DaekCompStyles.css';
import { Link } from 'react-router-dom';
import Daek from '../assets/images/HjulSkftning.png'


const DaekComp = () => {
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
                    <img src={Daek} alt="" width="300" height="400" />
                </div>
            <div className="col-lg-5">
                <h1>Hjulskift og dækservice til lav pris</h1>
                <p className="mt-3 mb-4">Ønsker du at få skiftet dine hjul hurtigt og sikkert? Hos Skorstensgaard har vi dygtige mekanikere, som hurtigt og effektivt kan skifte bilens hjul, når du skal gå fra sommer- til vinterdæk og tilbage igen.

                  Alle Skorstensgaards afdelinger har stor erfaring med ombytning af hjul og montering af dæk på fælge. For dig betyder det dækskifte uden bøvl. Ønsker du helt nye dæk på dine fælge eller kyndig vejledning? Så kan vi naturligvis også være behjælpelige dér.

                  Få et tilbud på hjul- og dækskifte her på siden.
                </p>
                <Link to="/kontakt" className="btn">BEDE OM ET TILBUD</Link>
            </div>
            </div>
        </div>
  </section>
  );
};

export default DaekComp;

