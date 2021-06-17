import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  'images/img-05.jpg',
  'images/img-01.jpg',
  'images/img-02.jpg'
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false}>
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
      </Fade>
    </div>
  )
}

export default Slideshow