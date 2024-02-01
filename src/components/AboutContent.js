// import React, { useState } from 'react';
import "./AboutContentStyles.css";
import ImageSlider from './ImageSlider';

const AboutContent = () => {
  const slides = [
    { url: require("../assets/images/item1.jpg"), title: "beach" },
    { url: require("../assets/images/item2.jpg"), title: "beach" },
    { url: require("../assets/images/item3.jpg"), title: "beach" },
    { url: require("../assets/images/item4.jpg"), title: "beach" },
    { url: require("../assets/images/item5.jpg"), title: "beach" },
    { url: require("../assets/images/item6.jpg"), title: "beach" },
   
  ];
  
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div style={{ textAlign: 'center', color: 'white', margin:'30px' }}>
      <h3 style={{margin: '10px'}}>Velkommen til vores bilplejevirksomhed, hvor passion møder præcision!</h3>
      <p>
        Med års usammenlignelig erfaring under vores bælte er vi stolte af at levere førsteklasses service, der    går ud over almindelig rengøring - vi fornyer din bil til sin oprindelige skønhed.
        <br/><br/>
        Vores team består af dedikerede fagfolk, der er lige så passionerede for biler som dig. Deres omhyggelige opmærksomhed på detaljer sikrer, at hver eneste krog og sprække af din bil får den pleje, den fortjener. Fra grundige udvendige vaske til detaljerede indvendige rengøringer, går vi ikke på kompromis med kvaliteten og sikrer resultater, der overgår dine forventninger.
        <br/><br/>
        Men tag ikke blot vores ord for det; vores lange liste af tilfredse kunder taler for vores engagement i excellence. Uanset om det handler om at restaurere en vintageklassiker eller vedligeholde en moderne luksusbil, behandler vi hver bil med samme omhu og ekspertise.
        <br/><br/>
        På vores virksomhed er kvalitet ikke blot et løfte; det er en garanti. Oplev forskellen med vores førsteklasses service og bliv en del af vores community af glade kunder, der stoler på os med deres dyrebare køretøjer.
      </p>
         
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
  
};

export default AboutContent;
