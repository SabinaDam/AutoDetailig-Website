import { useState } from 'react';
import "./FormStyles.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { db } from "./Firebase";

function FormExample() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [city, setCity]=useState("");
  const [message, setMessage]=useState("")
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      db.collection("contacts").add({
        name: name,
        email: email,
        city: city,
        message: message,
      })
      .then(() => {
        alert('Besked er sendt.')
      })
      .catch((error) => {
        alert(error.message);
      });

      setName("");
      setEmail("");
      setCity("");
      setMessage("");
    }

    setValidated(true);
  };

  return (
    <div className='container-sm'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Dit navn:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Navn og efternavn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>By</Form.Label>
          <Form.Control type="text" placeholder="By"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required />
          <Form.Control.Feedback type="invalid">
          Angiv en gyldig tilstand.
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustomCar">
          <Form.Label>Bil</Form.Label>
          <Form.Control type="text" required>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
          Vælg venligst bil
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
         <Form.Label>Besked</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Indtast venligst din besked.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'><Button className='btn-lg' type="submit">Submit form</Button></div>
        <div className='col-md-4'></div>
      </div>
      
    </Form>
    </div>
  );
  
}

export default FormExample;