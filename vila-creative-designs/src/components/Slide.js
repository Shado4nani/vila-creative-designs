import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import red_dining from '../images/apartment.jpg';
import gray_dining from '../images/boys-bedroom.jpg';
import headerp from '../images/photo-of-a-bathroom.jpg'
import { Image } from 'react-bootstrap';

export const Slides = () => (
  <div className="img-fluid">
    <Carousel >
      <Carousel.Item className="img-fluid">
        <img src={ red_dining } alt="First slide" className="img-fluid" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img-fluid">
        <img
          className="img-fluid"
          src={ gray_dining } 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={ headerp }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
)