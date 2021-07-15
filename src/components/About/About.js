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
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
    </div>
  );
}

export default About;