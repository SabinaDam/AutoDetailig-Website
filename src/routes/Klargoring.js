import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import HeroImgKlar from '../components/HeroImgKlar';
import KlargoringPrice from '../components/KlargoringPrice';


const Klargoring = () => {
  return (
    <div>
      <Navbar />
      <HeroImgKlar heading="Klargoring" text="*priserne varierer afhængigt af bilens størrelse" />
      <KlargoringPrice />
      <Footer />
    </div>
  );
};

export default Klargoring;
