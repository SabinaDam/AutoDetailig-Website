import React from 'react'
import "./SolfilmPriceStyles.css"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const SolfilmPrice = () => {
  return (
    <div className="solfilmP">
      <div className='film-type'>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>- Solfilm 5% -</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">6% Light Allowed<br/> 99% U/V Light Rejected</Card.Subtitle>
          <Card.Text>
          En solafskærmning med 5% VLT er ekstremt mørk og giver 
          maksimal privatliv og solbeskyttelse. Den tilbyder betydelig afskærmning 
          mod sollys og blænding, men den kan markant reducere synligheden, 
          især om natten eller under dårlige lysforhold. 
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>- Solfilm 20% -</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">22% Light Allowed <br/> 99% U/V Light Rejected</Card.Subtitle>
          <Card.Text>
          En afskærmning med 20% VLT er moderat mørk og tilbyder en balance 
          mellem privatliv, solbeskyttelse og synlighed. Den giver god afskærmning 
          mod sollys og blænding og bevarer relativt acceptabel synlighed både om 
          dagen og om natten. 
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>- Solfilm 35% -</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">34% Light Allowed <br/> 99% U/V Light Rejected</Card.Subtitle>
          <Card.Text>
          En afskærmning med 35% VLT er lettere end 20%, men giver stadig 
          tilstrækkelig privatliv og solbeskyttelse. <br/>Den tillader mere synligt
          lys at passere gennem ruderne, hvilket resulterer i bedre synlighed både 
          om dagen og om natten.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>- Solfilm 50%-</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">55% Light Allowed <br/> 99% U/V Light Rejected</Card.Subtitle>
          <Card.Text>
          En afskærmning med 50% VLT er relativt let og tilbyder minimalt privatliv,
           men giver fremragende varme- og UV-afvisende egenskaber. Den tillader en 
           betydelig mængde synligt lys at passere gennem ruderne.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>- PRIS -</h3>
          <span className="bar"></span>
          <p className="btc"> 2000 - 3.200  <br/>,-</p>
          <p>Prisen på solfilm afhænger selvfølgelig af, hvor mange ruder der skal film på.</p>
          <p>
           Vare/Personbil fra førerdør og bagud – 3 ruder: kr. 2000,- <br></br>
           Vare/Personbil – fra førerdør og bagud – 5 ruder: kr. 2400,-<br></br>
           Vare/Personbil – fra førerdør og bagud – 5+2 ruder: kr. 2800,-<br></br>
           Vare/Personbil – fra førerdør og bagud – 7 ruder: kr. 2800.-<br></br>
           Vare/Personbil – fra førerdør og bagud – 7+2 ruder: kr. 3200.-<br></br>
          </p>
          <Link to="/kontakt" className="btn">BEDE OM ET TILBUD</Link>
        </div>      
      </div>
    </div>
  )
}

export default SolfilmPrice
