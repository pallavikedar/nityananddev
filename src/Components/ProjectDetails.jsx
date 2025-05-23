import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaWifi,
  FaCar,
  FaDumbbell,
  FaArrowLeft,
} from "react-icons/fa";
import project1 from "../Assets/project1.webp";
import project2 from "../Assets/project2.jpeg";
import project3 from "../Assets/project3.jpg";
import project4 from "../Assets/project4.jpg";
import "./ProjectDetails.css";

function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="text-center p-6 text-gray-600">
        Project not found
      </div>
    );
  }

  const amenities = [
    { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    { name: "Free Wi-Fi", icon: <FaWifi /> },
    { name: "Parking", icon: <FaCar /> },
    { name: "Gym", icon: <FaDumbbell /> },
  ];

  const galleryImages = [
    project.image,
    project1,
    project2,
    project3,
    project4,
  ].filter((img, index, self) => self.indexOf(img) === index);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft className="mr-2" /> Back to Projects
      </button>

      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="hero-image"
        />
        <h1 className="project-title">{project.name}</h1>
        <p className="project-address">{project.address}</p>
      </motion.div>

      {/* Amenities Section */}
      <motion.section
        className="amenities-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="section-title">Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="amenity-card"
              whileHover={{ scale: 1.05 }}
            >
              <span className="amenity-icon">{amenity.icon}</span>
              <span className="amenity-name">{amenity.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ProjectDetails;
