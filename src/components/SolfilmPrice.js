import React from 'react'
import "./SolfilmPriceStyles.css"
import { Link } from 'react-router-dom'

const SolfilmPrice = () => {
  return (
    <div className="solfilmP">
      <div className="card-container">
        <div className="card">
            <h3>- Solfilm -</h3>
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
  )
}

export default SolfilmPrice
