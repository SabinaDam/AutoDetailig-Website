import React from 'react'
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgSol from '../components/HeroImgSol.js';
import SolfilmPrice from '../components/SolfilmPrice';

const Solfilm = () => {
  return (
    <div>
      <Navbar />
      <HeroImgSol heading="Solfilm" text="Hvis du gerne vil give din bil et elegant strejf, kunne du overveje solfilm."/>
      <SolfilmPrice />
      <Footer />
    </div>
  )
}

export default Solfilm
