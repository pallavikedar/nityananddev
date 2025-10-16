import React from "react";
import "./Gallary.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";




const images = [
  { id: 1, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac000029626eae0a/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 1" },
  { id: 2, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac0c0025267c705b/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 2" },

  { id: 4, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac150001033be90c/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 4" },


  { id: 8, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac270015eb65646d/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 8" },
  { id: 9, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac3c002672974e3b/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },

  { id: 11, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac450028093ea186/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 12, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac4d002eb62cc295/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 13, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac5700036c969343/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 14, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac6a0025d5fea729/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 15, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac7a0023e84df636/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 16, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac8a003d89e37263/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },
  { id: 17, src:"https://fra.cloud.appwrite.io/v1/storage/buckets/68ece1ef00083478df97/files/68f0ac950031f6cf3f8c/view?project=68ece1d1000abe9952c0&mode=all", alt: "Image 9" },

 
  // { id: 20, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0084.jpg?alt=media&token=f62c2c88-6ac5-42c3-915e-647d01db12a5", alt: "Image 9" },

  
 
  
];

const Gallery = () =>
 {
  return (
    <div>
  
    <div>
   
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"100px" }}><h2 style={{borderRadius:"0px 10px 0px 10px",color:"hsl(0, 100%, 39%)",fontSize:"2rem"}}>Gallery</h2></div>
   
    <div className="unique-gallery-container">

      {images.map((image) => (
        <div key={image.id} className="unique-gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
   
    </div>
   
    </div>
  );
};

export default Gallery;
