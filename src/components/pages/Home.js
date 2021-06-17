import React from "react";
import Navbar from "../Navbar/Navbar";
import ImageSlider from "../ImageSlider"

import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import "../../App";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider  />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
