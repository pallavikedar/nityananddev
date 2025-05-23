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
  };

  return (
    <div className="projects-container max-w-7xl mx-auto p-6">
      {/* Current Projects Section */}
      <section className="projects-section mb-16">
        <div className="flex justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text p-2 rounded-tl-none rounded-br-none"
          >
            Our Projects
          </motion.h2>
        </div>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-transform duration-300"
              onClick={() => handleProjectClick(project)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image w-full h-48 object-cover"
              />
              <div className="project-info p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="projects-section">
        <div className="flex justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text p-2 rounded-tr-none rounded-bl-none"
          >
            Upcoming Projects
          </motion.h2>
        </div>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {upcomingProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-transform duration-300"
              onClick={() => handleProjectClick(project)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image w-full h-48 object-cover"
              />
              <div className="project-info p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;