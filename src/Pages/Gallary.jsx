import React from "react";
import "./Gallary.css";
import image1 from '../Assets/_DSC0018.jpg';
import image2 from '../Assets/_DSC0021.jpg';

import image4 from '../Assets/_DSC0024.jpg';



import image8 from '../Assets/_DSC0035.jpg';
import image9 from '../Assets/_DSC0037.jpg';

import image11 from '../Assets/_DSC0042.jpg';
import image12 from '../Assets/_DSC0044.jpg';
import image13 from '../Assets/_DSC0046.jpg';
import image14 from '../Assets/_DSC0049.jpg';
import image15 from '../Assets/_DSC0055.jpg';
import image16 from '../Assets/_DSC0058.jpg';
import image17 from '../Assets/_DSC0063.jpg';


import image20 from '../Assets/_DSC0084.jpg';



const images = [
  { id: 1, src: image1, alt: "Image 1" },
  { id: 2, src: image2, alt: "Image 2" },
 
  { id: 4, src:image4, alt: "Image 4" },
 
 
  { id: 8, src:image8, alt: "Image 8" },
  { id: 9, src:image9, alt: "Image 9" },

  { id: 11, src:image11, alt: "Image 9" },
  { id: 12, src:image12, alt: "Image 9" },
  { id: 13, src:image13, alt: "Image 9" },
  { id: 14, src:image14, alt: "Image 9" },
  { id: 15, src:image15, alt: "Image 9" },
  { id: 16, src:image16, alt: "Image 9" },
  { id: 17, src:image17, alt: "Image 9" },

 
  { id: 20, src:image20, alt: "Image 9" },

  
 
  
];

const Gallery = () =>
 {
  return (
    <div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}><h2 style={{borderRadius:"0px 10px 0px 10px",color:"hsl(0, 100%, 39%)",fontSize:"2rem"}}>Gallery</h2></div>
   
    <div className="unique-gallery-container">

      {images.map((image) => (
        <div key={image.id} className="unique-gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
