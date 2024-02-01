import React from 'react';
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import HeroService from '../components/HeroService';
import ServiceWork from '../components/ServiceWork';

const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroService />
      <ServiceWork /> 
      <Footer />
    </div>
  )
}

export default Service
