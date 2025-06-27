import React from "react";
import "./Amenities.css";
import image1 from '../Assets/cementroad.jpg';
import image2 from '../Assets/sewarline.jpg';
import image3 from '../Assets/electricity.JPG';
import image4 from '../Assets/entrance.webp';
import image5 from '../Assets/park-china.jpg';
import image6 from '../Assets/treeplantation.webp';
import image8 from '../Assets/demarcation.webp';
import image9 from '../Assets/waterpipeline.jpg';

const amenities = [
  { name: "Cement Road", image: image1, description: "Durable, smooth roads for seamless connectivity." },
  { name: "Sewer Line", image: image2, description: "Efficient and reliable sewage systems." },
  { name: "Electricity", image: image3, description: "Robust power infrastructure for modern living." },
  { name: "Entrance Gate", image: image4, description: "Grand, secure entrances for community prestige." },
  { name: "Garden", image: image5, description: "Lush green spaces for relaxation and beauty." },
  { name: "Tree Plantation", image: image6, description: "Eco-friendly landscaping for sustainability." },
  { name: "Demarcation", image: image8, description: "Clearly defined property boundaries for clarity." },
  { name: "Water Pipeline", image: image9, description: "Consistent, clean water supply for all." },
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-header">
        <h2 className="amenities-title">Our Amenities</h2>
        <p className="amenities-subtitle">
          Discover the foundation of exceptional living with our premium infrastructure.
        </p>
      </div>
      <div className="amenities-container">
        {amenities.map((amenity, index) => (
          <div className="amenity-card" key={index}>
            <img src={amenity.image} alt={amenity.name} className="amenity-image" />
            <div className="amenity-content">
              <h3 className="amenity-name">{amenity.name}</h3>
              <p className="amenity-description">{amenity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;