import React from 'react';
import { Fade } from 'react-slideshow-image';
import './slider.css'

const fadeImages = [
  'images/img-43.jpg',
  'images/img-09.jpg',
  'images/img-46.jpg',
  'images/img-02.jpg',
  'images/img-45.jpg',
  'images/img-10.jpg',
  'images/img-47.jpg',
  'images/img-16.jpg',
];

const properties = {
  duration: 4000,
  autoplay: true,
  pauseOnHover: false,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...properties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} className="slideresponsive" alt="slider" />
          </div>
          
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} className="slideresponsive" alt="slider" />
          </div>
         
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow