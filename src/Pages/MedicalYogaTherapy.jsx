import React, { useState, useEffect } from 'react';
import {
  FaBone,
  FaArrowDown,
  FaWheelchair,
  FaLungs,
  FaHandHoldingMedical,
  FaFemale,
  FaChild,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MedicalYogaTherapy.css'; // Import the CSS file

const therapies = [
  { icon: <FaBone />, title: 'Cervical Spondylitis', description: 'Effective yoga therapies to manage cervical pain and stiffness.' },
  { icon: <FaArrowDown />, title: 'Lumbar Spondylitis', description: 'Targeted yoga poses for lower back pain relief and mobility.' },
  { icon: <FaWheelchair />, title: 'Sciatica Pain', description: 'Therapeutic yoga for sciatica pain management and nerve relaxation.' },
  { icon: <FaLungs />, title: 'Knee Pain', description: 'Gentle yoga to strengthen knee joints and improve flexibility.' },
  { icon: <FaHandHoldingMedical />, title: 'Calcaneus Spur', description: 'Specialized yoga to alleviate heel pain and improve posture.' },
  { icon: <FaHandHoldingMedical />, title: 'Frozen Shoulder', description: 'Yoga asanas to increase shoulder mobility and reduce stiffness.' },
  { icon: <FaFemale />, title: 'PCOD Therapy', description: 'Holistic yoga for hormonal balance and PCOD management.' },
  { icon: <FaChild />, title: 'Infertility Therapy', description: 'Supportive yoga techniques for fertility enhancement.' },
];

const MedicalYogaTherapy = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (width <= 1024) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(3); // Desktop: 3 items
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(therapies.length / itemsPerPage));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(therapies.length / itemsPerPage) - 1 : prevIndex - 1
    );
  };

  const visibleTherapies = therapies.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="container">
      <h1 className="header">Medical Yoga Therapy</h1>
      <div className="carousel" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
        <button className="button" onClick={prevSlide}>
          &#8592;
        </button>
        <div
          className="therapy-container"
          style={{ gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)` }}
        >
          {visibleTherapies.map((therapy, index) => (
            <div key={index} className="card">
              <div className="icon">{therapy.icon}</div>
              <h3 className="title">{therapy.title}</h3>
              <p className="description">{therapy.description}</p>
            </div>
          ))}
        </div>
        <button className="button" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default MedicalYogaTherapy;
