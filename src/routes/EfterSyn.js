import React from 'react';
import Navbar from '../components/Navbar';
import HeroImgSyn from '../components/HeroImgSyn';
import EftersynComp from '../components/EftersynComp';
import Footer from '../components/Footer';

const EfterSyn = () => {
  return (
    <div>
      <Navbar />
      <HeroImgSyn heading="Serviceeftersyn"  />
      <EftersynComp />
      <Footer />
    </div>
  )
}

export default EfterSyn
