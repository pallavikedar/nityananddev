import React, { useState, useRef, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Header from "../Components/Header";
import About from "./About";
import ServicesPage from "./Services";
import Projects from "./Projects";
import Amenities from "./Amenities";
import Gallery from "./Gallary";
import ContactUs from "./Contact";
import Footer from "../Components/Footer";
import ContactIcons from "../Components/ContactIcon";
import image from '../Assets/background.png';
import video from '../Assets/shreenagari.mp4';
import "./Home.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videoRef.current) {
          videoRef.current.load(); // Trigger video load when in view
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div id="home" className="home-section">
   
      <ContactIcons />
      <div className="slider">
        {isLoading && (
          <div className="loader">
            <FaSpinner className="spinner-icon" />
            <p>Loading...</p>
          </div>
        )}
        <div className="slide">
          <video
            ref={videoRef}
            src="https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ae98000def10aa9a/view?project=68ece1d1000abe9952c0&mode=all"
            controls={false}
            autoPlay
            loop
            muted
            preload="none"
            className="slider-video"
            poster={image}
            onLoadedData={handleVideoLoaded}
          />
        </div>
      </div>
      <About />
      <ServicesPage />
      <Projects />
      <Amenities />
    
      <ContactUs />
     
    </div>
  );
}

export default Home;