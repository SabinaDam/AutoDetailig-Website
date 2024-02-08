import React from 'react';
import "./PolishPricesStyles.css"
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';


const PolishPrice = () => {
  return (
    <div className="polish">
      <div className="price-info">
        <h3>Hvorfor Polere Bilen?</h3>
        <p>En polering af bilen (polish) giver dig mulighed for at fjerne vaskeridser, hologrammer, falmede overfalder og generelt set bare mulighed for at få bilen til at skinne som var den ny.
          Ved polering og lakrens inden, får du ligeledes renset lakken i dybden, så eventuel flyverust og andet forsvinder, for at du derved får en helt ren lak.
          Det giver en nemmere vedligeholdelse af bilen fremadrettet
        </p>
        <h3>5 trin inden polering af bil</h3>
        <p>Inden vi polerer bilen, skal vi igennem 5 trin. 
          Alle trin går ud på at gøre bilen så ren som muligt, bortset fra det sidste trin, 
          som handler om at få tørret bilen af, så den er klar til at blive lakforseglet.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <Accordion defaultActiveKey="0" className='custom-accordion'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Trin 1 - Vask af bilen</Accordion.Header>
          <Accordion.Body>
          Det første skridt, inden vi begynder at polere bilen, 
          er at vaske den GRUNDIGT. det betyder, at man vasker det godt med specielle 
          affedtningsopløsninger, i hånden, med en svamp for ikke at beskadige lakken.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Trin 2 - Fjern flyverust </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Trin 3 - Fjern tjære </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Trin 4 - Lakrens ved brug af claybar</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Trin 5 - Sådan polerer bilen</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>

      <div className="card-container">
        <div className="card">
            <h3>- Polering af bil -</h3>
            <span className="bar"></span>
            <p className="btc">1.500 - 4.500  ,-</p>
            <p>Afhængigt af din bils størrelse, laktype og ønskede 
                 efterbehandlingsdetaljer som voks og forseglinger, er det 
                 en god idé at indhente flere tilbud på polering. Priserne 
                 kan variere betydeligt, og det inkluderer også muligheden 
                 for at få stillet en lånebil til rådighed, mens din bil 
                 bliver behandlet.
                </p>
                <Link to="/kontakt" className="btn">BEDE OM ET TILBUD</Link>
        </div>      
      </div>
    </div>
  );
};

export default PolishPrice
