// import React, { useState } from 'react';
import "./AboutContentStyles.css";
import ImageSlider from './ImageSlider';
import { BsBellFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillCarFrontFill } from "react-icons/bs";



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
    <div className="about">
       <div className="title">
          <h3> Protect the value of your car!</h3>
        </div>
      <div className="left">
        <p>
          Med års usammenlignelig erfaring under vores bælte er vi stolte af at levere førsteklasses service, der    går ud over almindelig rengøring - vi fornyer din bil til sin oprindelige skønhed.
         
          Vores team består af dedikerede fagfolk, der er lige så passionerede for biler som dig. Deres omhyggelige opmærksomhed på detaljer sikrer, at hver eneste krog og sprække af din bil får den pleje, den fortjener. Fra grundige udvendige vaske til detaljerede indvendige rengøringer, går vi ikke på kompromis med kvaliteten og sikrer resultater, der overgår dine forventninger.
          
          Men tag ikke blot vores ord for det; vores lange liste af tilfredse kunder taler for vores engagement i excellence. Uanset om det handler om at restaurere en vintageklassiker eller vedligeholde en moderne luksusbil, behandler vi hver bil med samme omhu og ekspertise.
          <br/><br/>
          På vores virksomhed er kvalitet ikke blot et løfte; det er en garanti. Oplev forskellen med vores førsteklasses service og bliv en del af vores community af glade kunder, der stoler på os med deres dyrebare køretøjer.
        </p>
      </div>
      <div className="right">
        <div className="info">
        <div className="d-flex pt-4 mb-3">
                <div className="iconbox me-4">
                    <BsBellFill/>
                </div>
                <div>
                    <h5>Kvalitet</h5>
                    <p>Det centrale i vores koncept er kvaliteten af vores arbejde. 
                      Vi investerer derfor løbende i det nyeste udstyr og værktøj, 
                      samt i uddannelse af vores dygtige personale. Vi vil ikke gå 
                      på kompromis med vores produkter og det arbejde, vi udfører. 
                      Vi bruger udelukkende reservedele af OE-kvalitet, så bilerne 
                      stadig vil være omfattet af eventuelle fabriksgarantier. 
                     
                    </p>
                </div>
            </div>
            <div className="d-flex mb-3">
                <div className="iconbox me-4">
                  <BsCheckCircleFill />
                </div>
                <div>
                    <h5>Kunden</h5>
                    <p>Vi lægger stor vægt på at tale med og lytte til dig, 
                      så vi kan forstå det reelle behov. Vi ønsker ikke, at foretage 
                      unødige services eller reparationer på din bil. Hos os er der 
                      ingen skjulte omkostninger og tillæg, og vi aftaler altid prisen med dig,
                      inden vi går i gang. Viser det sig undervejs, at opgaven ændrer omfang, 
                      så kontakter vi dig og finder en god løsning inden vi afslutter opgaven. 
                      Vi lever nemlig af tilfredse kunder, der stoler på os.
                    </p>
                </div>
            </div>
            <div className="d-flex mb-3">
                <div className="iconbox me-4">
                  <BsFillCarFrontFill /> 
                </div>
                <div>
                    <h5>Medarbejder</h5>
                    <p>En dygtig mekaniker hos en autoservice er en pålidelig fagmand,
                      der udmærker sig ved at diagnosticere, reparere og vedligeholde
                      køretøjer. Med ekspertise inden for forskellige bilsystemer 
                      løser de effektivt mekaniske problemer, hvilket sikrer optimal
                      ydeevne og sikkerhed for køretøjer. Gennem deres 
                      på detaljer og problemløsningsevner leverer de håndværk af 
                      høj kvalitet, tjener tillid og tilfredshed fra kunderne. 
                      Deres dedikation til ekspertise og kontinuerlig læring gøre
                      dem i stand til at holde sig opdateret med industriens fremskridt,
                      hvilket giver pålidelige løsninger, der er skræddersyet til hvert 
                      køretøjs behov.
                    </p>
                </div>
            </div>
          
        </div>

        <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      </div> 

      
         
     
    </div>
  );
  
};

export default AboutContent;
