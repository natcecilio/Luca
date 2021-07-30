import React from 'react';
import './About.css';
import {useTheme} from '../../context/Theme';


function About () {

  const { theme } = useTheme();

  return (
    <div className={`about-container ${theme}`} >
      <h1>About Me</h1>
    
      <p>
        <img className="about-picture" src={"images/about.jpg" } alt="Luca" width="190vw" height="auto"/>
        My name is Luca, I have over 35 years of experience in the 3D industry that have allowed me to successfully work for local and international Creative Agencies

        Some of my specialties as a Professional 3D Artist include 3D product visualizations and renderings, 3D animations and motion projects for print, web and video.

        I would love to discuss how we can work together! contact me

        I'm curious about your project!
      </p>
    </div>
  );
}

export default About;