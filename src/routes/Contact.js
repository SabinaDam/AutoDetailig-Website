import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroContact from '../components/HeroContact';

import FormExample from "../components/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroContact /> 
      <FormExample />
      <Footer />
    </div>
  );
}

export default Contact;
