
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import React from 'react'

const OwlCarousel = () => {
  return (
    <div className='container-sm'>
      <section id="testimonials" className="section-padding text-center border-top">
        <div className="container"> 
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-4 fw-semibold">Kundeanmeldelser</h1>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
       
          <div className="owl-carousel owl-theme testimonials-container">
            
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <FaQuoteLeft />
                  <h2>God kvalitet</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimo repellendus? Porro explicabo, fuga deserunt quos quaerat animi odit placeat illum, doloribus voluptates praesentium recusandae numquam, dignissimos rerum consequuntur labore.</p>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="./assets/images/item1.jpg" alt="Person" />
                </div>
                <div className="profile-desc">
                  <span>Person navn</span>
                  <span>Beskrivelse</span>
                </div>
              </div>
            </div>
          
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <FaQuoteLeft />
                  <h2>God kvalitet</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimo repellendus? Porro explicabo, fuga deserunt quos quaerat animi odit placeat illum, doloribus voluptates praesentium recusandae numquam, dignissimos rerum consequuntur labore.</p>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="./assets/images/item1.jpg" alt="Person" />
                </div>
                <div className="profile-desc">
                  <span>Person navn</span>
                  <span>Beskrivelse</span>
                </div>
              </div>
            </div>
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <FaQuoteLeft />
                  <h2>God kvalitet</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dignissimo repellendus? Porro explicabo, fuga deserunt quos quaerat animi odit placeat illum, doloribus voluptates praesentium recusandae numquam, dignissimos rerum consequuntur labore.</p>
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="./assets/images/item1.jpg" alt="Person" />
                </div>
                <div className="profile-desc">
                  <span>Person navn</span>
                  <span>Beskrivelse</span>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
     </div>
  )
}

export default OwlCarousel

