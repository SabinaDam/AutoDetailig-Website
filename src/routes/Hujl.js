import React from 'react'
import Navbar from '../components/Navbar';
import HeroImgHujl from '../components/HeroImgHujl';
import Footer from '../components/Footer';
import DaekComp from '../components/DaekComp';

const Hujl = () => {
  return (
    <div>
      <Navbar />
      <HeroImgHujl heading="Hujl og Daekskift"  />
      <DaekComp />
      <Footer />
    </div>
  )
}

export default Hujl
