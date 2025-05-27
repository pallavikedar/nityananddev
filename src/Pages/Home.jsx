import React, { useState } from "react";
import Header from "../Components/Header";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import "./Home.css";
import About from "./About";
import ServicesPage from "./Services";
import Projects from "./Projects";
import Amenities from "./Amenities";
import Gallery from "./Gallary";
import ContactUs from "./Contact";
import Footer from "../Components/Footer";
import ContactIcons from "../Components/ContactIcon";
import  image from '../Assets/background.png'

function Home() {
  
  const [isLoading, setIsLoading] = useState(true); // State to track video loading

  const handleVideoLoaded = () => {
    setIsLoading(false); // Set loading to false when the video is loaded
    console.log(isLoading);
  };

  return (
    <>
      <div id="home">
        <Header />
        <ContactIcons />
        <div className="slider">
          {isLoading && (
            <div className="loader">
              <FaSpinner className="spinner-icon" />
              <p>Loading video...</p>
            </div>
          )}
          <div className="slide">
          <video
          src="https://resallingo.sfo3.digitaloceanspaces.com/resallingo/Shree%20Nagari%20III.mp4"
          controls={false}
          autoPlay
          loop
          muted
          preload="metadata"
          className="slider-video"
          poster={image} // Add a placeholder image
          onLoadedData={handleVideoLoaded}
        />
          </div>
        </div>
        <About />
        <ServicesPage />
        <Projects />
        <Amenities />
        <Gallery />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;