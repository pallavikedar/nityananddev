import React from "react";
import "./Amenities.css"; 
import image1 from '../Assets/cementroad.jpg';
import image2 from '../Assets/sewarline.jpg';
import image3 from '../Assets/electricity.JPG';
import image4 from '../Assets/entrance.webp';
import image5 from '../Assets/park-china.jpg';
import image6 from '../Assets/treeplantation.webp';
import image7 from '../Assets/sewageline.jpg';
import image8 from '../Assets/demarcation.webp';
import image9 from '../Assets/waterpipeline.jpg';

const amenities = [
  { name: "Cement Road", image: image1 },
  { name: "Sewer Line", image: image2 },
  { name: "Electricity", image:image3 },
  { name: "Entrance Gate", image: image4 },
  { name: "Tree Plantation", image: image5 },
  { name: "Garden", image: image6 },
  { name: "Sewage Line", image: image7},
  { name: "Demarcation", image:image8 },
  { name: "Water Pipeline", image: image9},
];

const Amenities = () => {
  return (
    <div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}><h2 style={{borderRadius:"0px 10px 0px 10px",color:"hsl(0, 100%, 39%)",fontSize:"2rem"}}>Amenities</h2></div>
   
    <div className="amenities-container">
   
      {amenities.map((amenity, index) => (
        <div className="amenity-card" key={index}>
          <img src={amenity.image} alt={amenity.name} className="amenity-image" />
          <div className="amenity-name">{amenity.name}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Amenities;
