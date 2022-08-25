import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/bhaba.png'
import "./eminent.css";
function UncontrolledExample() {
  return (
    <div className='eminent'>
    <h3 className="eminent_head">Eminent and Unforgettables</h3>
    <hr className='hor_rule'></hr>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;

