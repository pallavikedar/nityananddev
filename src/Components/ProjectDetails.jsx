import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSwimmingPool,
  FaWifi,
  FaCar,
  FaDumbbell,
  FaArrowLeft,
  FaBus,
} from "react-icons/fa";
import { MdFlightTakeoff, MdLocationOn } from "react-icons/md";
import project1 from "../Assets/project1.webp";
import project2 from "../Assets/project2.jpeg";
import project3 from "../Assets/project3.jpg";
import project4 from "../Assets/project4.jpg";
import styles from "./ProjectDetails.module.css";

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
      className={styles.projectDetailsContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        <FaArrowLeft className="mr-2" /> Back to Projects
      </button>

      {/* Hero Section */}
      <motion.div
        className={styles.heroSection}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={project.image}
          alt={project.name}
          className={styles.heroImage}
        />
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <p className={styles.projectAddress}>{project.address}</p>
      </motion.div>

      {/* Amenities Section */}
      <motion.section
        className={styles.amenitiesSection}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className={styles.sectionTitle}>Amenities</h2>
        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className={styles.amenityCard}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.amenityIcon}>{amenity.icon}</span>
              <span className={styles.amenityName}>{amenity.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Location Highlights Section */}
      <motion.section
        className={styles.locationSection}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Location Highlights</h2>
        <div className={styles.locationGrid}>
          <motion.div className={styles.locationCard} whileHover={{ scale: 1.05 }}>
            <span className={styles.locationIcon}><FaCar /></span>
            <div>
              <h4>Highway Access</h4>
              <p>NH‑44 runs directly through Dighori</p>
            </div>
          </motion.div>

          <motion.div className={styles.locationCard} whileHover={{ scale: 1.05 }}>
            <span className={styles.locationIcon}><MdFlightTakeoff /></span>
            <div>
              <h4>Airport</h4>
              <p>~19 km (32 min) to Nagpur Airport</p>
            </div>
          </motion.div>

          <motion.div className={styles.locationCard} whileHover={{ scale: 1.05 }}>
            <span className={styles.locationIcon}><FaBus /></span>
            <div>
              <h4>ISBT Bus Stand</h4>
              <p>~6 km (15–20 min drive)</p>
            </div>
          </motion.div>

          <motion.div className={styles.locationCard} whileHover={{ scale: 1.05 }}>
            <span className={styles.locationIcon}><MdLocationOn /></span>
            <div>
              <h4>Nearby Facilities</h4>
              <p>ATMs, restaurants, hospitals within 1 km</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ProjectDetails;
