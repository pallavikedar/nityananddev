import React from "react";
import {
  FaHandshake,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineSpeed, MdPersonPin } from "react-icons/md";
import { RiLayout5Line } from "react-icons/ri";
import "./About.css";
import about from '../Assets/Group 29 (4).jpg'

const About = () => {
  return (
    <section className="about-us" id="about">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">About Us</h1>
       
      </div>

      {/* Mission Section */}
      <div className="mission">
        <div className="mission-content">
          {/* Image Section */}
          <div className="mission-image">
            <img
              src={about} // Replace with your desired image URL
              alt="Mission"
            />
          </div>

          {/* Text Section */}
          <div className="mission-text">
          <p>
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
          To design thoughtfully planned land layouts that seamlessly blend
          modern infrastructure with natural surroundings.
        </p>
            <RiLayout5Line className="mission-icon" />
            <h2>Our Mission</h2>
            <p>
              To design thoughtfully planned land layouts that seamlessly blend
              modern infrastructure with natural surroundings.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Legacy of Trust</h3>
            <p>Decades of experience and transparency in land development.</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Innovative Solutions</h3>
            <p>Modern, sustainable, and innovative layouts.</p>
          </div>
          <div className="feature-card">
            <MdPersonPin className="feature-icon" />
            <h3>Customer-Centric</h3>
            <p>Your satisfaction is the cornerstone of our work.</p>
          </div>
          <div className="feature-card">
            <MdOutlineSpeed className="feature-icon" />
            <h3>Timely Delivery</h3>
            <p>Projects delivered on time without compromising on quality.</p>
          </div>
          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>Quality Assurance</h3>
            <p>Commitment to the highest standards in every project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
