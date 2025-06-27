import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import project1 from "../Assets/project1.webp";
import project2 from "../Assets/project2.jpeg";
import project3 from "../Assets/project3.jpg";
import project4 from "../Assets/project4.jpg";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: "Shree Nagari-1",
      address: "Khasra No. 51/3, P.NO. 36, Mouza-Umargaon, TAH.-Nagpur(R), Dist.-Nagpur",
      image: project1,
    },
    {
      id: 2,
      name: "Shree Nagari-2",
      address: "Khasra No. 50/1, P. No. 36, Mouza Umargaon, Tah. Nagpur (R), Dist.-Nagpur",
      image: project2,
    },
  ];

  const upcomingProjects = [
    {
      id: 3,
      name: "Shree Nagari-3",
      address: "789 Ocean Drive, Townsville",
      image: project3,
    },
    {
      id: 4,
      name: "Shree Nagari-4",
      address: "101 Hill Road, Townsville",
      image: project4,
    },
  ];

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="projects-section" id="projects">
      {/* Current Projects Section */}
      <div className="projects-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="projects-title"
        >
          Our Projects
        </motion.h2>
        <p className="projects-subtitle">
          Discover our completed developments, designed for sustainable and modern living.
        </p>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-address">{project.address}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Projects Section */}
      <div className="projects-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="projects-title"
        >
          Upcoming Projects
        </motion.h2>
        <p className="projects-subtitle">
          Preview the future of luxury with our upcoming developments.
        </p>
      </div>
      <div className="projects-container">
        {upcomingProjects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-address">{project.address}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;