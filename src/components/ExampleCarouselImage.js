import React from 'react';
import itemImage from '../assets/images/item4.jpg';

const ExampleCarouselImage = ({ altText }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'20px' }}>
      <img
        className="d-block"
        src={itemImage}
        alt={altText}
        style={{ maxWidth: '20%', height: 'auto', opacity: 0.3 }}
      />
    </div>
  );
};

export default ExampleCarouselImage;