import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ImageSlider from "../Slider/ImageSlider"

import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "../../App";

import ThemeBtn from '../ThemeBtn';
import {useTheme} from '../../context/Theme';



function Home() {

  const { theme } = useTheme();

  /*useEffect(() => {document.addEventListener('contextmenu', event => event.preventDefault());},[])*/

  return (
    <div className={`App ${theme}`}>
       <ThemeBtn />
      <Navbar pageName="Contact" pageLink="/contact"/>
      <ImageSlider  />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
