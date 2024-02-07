import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import { FaStar } from 'react-icons/fa';

function OwlCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage altText="Image 1" />
        <Carousel.Caption>
          <div className="quote"> 
            <i className="fa fa-quote-left"></i>
            <h2>Grundig og effektiv</h2>
          </div>
          <p>Grundig og effektiv ... imponeret over hvor godt bilen kunne komme til at se ud igen.</p>
          <div className="rating"> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage altText="Image 2" />
        <Carousel.Caption>
          <div className="quote"> {/* Use className instead of class */}
            <i className="fa fa-quote-left"></i>
            <h2> Professionelt</h2>
          </div>
          <p>Professionelt, perfekt og fantastisk service, 
            jeg kan helt klart anbefale dem hvis man har en bil
            man er glad for og gerne vil passe på den. 😍😍
          </p>
          <div className="rating"> {/* Use className instead of class */}
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage altText="Image 3" />
        <Carousel.Caption>
          <div className="quote">
            <i className="fa fa-quote-left"></i>
            <h2>Best of the best!</h2>
          </div>
          <p>Best of the best. They are very careful at every detail, you can clearly see that they are passionate of what they are doing! Highly recommend! You won’t regret i!</p>
          <div className="rating"> 
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default OwlCarousel;
