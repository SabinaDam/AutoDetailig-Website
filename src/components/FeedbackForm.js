import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';



const FeedbackForm = () => {
  const [hoverValue, setHoverValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <div className='stars mt-5' >
      <h2 style={{display:'flex', justifyContent: 'center', color: 'whitesmoke'}}>Giv os stjerner</h2>
      <div className='array' style={{display: 'flex', justifyContent: 'center'}}>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(ratingValue)}
              onMouseOver={() => handleMouseOver(ratingValue)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) >= ratingValue
                  ? colors.orange
                  : colors.grey
              }
              style={{ marginRight: 10, cursor: "pointer" }}
            />
          );
        })}
      </div>
      <Form>
        <Form.Group className="mb-5 mt-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Din kommentar</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;


