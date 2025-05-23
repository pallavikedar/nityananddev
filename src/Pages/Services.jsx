import React from 'react';
import { FaRegClipboard, FaProjectDiagram, FaTools, FaCheckCircle, FaRegFileAlt, FaCogs } from 'react-icons/fa';
import './ServicesPage.css';

const Services = () => {
  return (
    <div className="services-container" id='services'>
      <div className="background-image">
        <div className="contents">
          <h1 className="h1">Plot Layouts Development</h1>
          <p className="intro">
            We specialize in the development of meticulously designed plot layouts that maximize space utilization,
            ensure optimal infrastructure development, and enhance the overall value of your land investments.
            Whether you're looking to create a residential community, commercial spaces, or mixed-use developments,
            our team has the expertise to deliver high-quality layouts that meet your needs.
          </p>
          <p className="services-title">Our Services Include:</p>
          <div className="service-list">
            <div className="service-item">
              <FaRegClipboard className="service-icon" />
              <div className="service-content">
                <h3>Site analysis and assessment</h3>
                
              </div>
            </div>
            <div className="service-item">
              <FaProjectDiagram className="service-icon" />
              <div className="service-content">
                <h3>Master planning and layout design</h3>
               
              </div>
            </div>
            <div className="service-item">
              <FaTools className="service-icon" />
              <div className="service-content">
                <h3>Infrastructure planning</h3>
               
              </div>
            </div>
            <div className="service-item">
              <FaCheckCircle className="service-icon" />
              <div className="service-content">
                <h3>Surveying and land measurement</h3>
                
              </div>
            </div>
            <div className="service-item">
              <FaRegFileAlt className="service-icon" />
              <div className="service-content">
                <h3>Regulatory compliance and approvals</h3>
                
              </div>
            </div>
            <div className="service-item">
              <FaCogs className="service-icon" />
              <div className="service-content">
                <h3>Project management and coordination</h3>
                
              </div>
            </div>
          </div>
          <p className="closing">
            With years of experience in the field, we ensure that every plot layout we design is not only practical
            but also enhances the long-term value of the property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
