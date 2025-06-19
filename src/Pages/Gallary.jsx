import React from "react";
import "./Gallary.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";




const images = [
  { id: 1, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0021.jpg?alt=media&token=3a7a4173-227a-4465-a424-0bae8d8196f7", alt: "Image 1" },
  { id: 2, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0024.jpg?alt=media&token=13c8abbb-d3f9-4733-a09e-d47a08a9c72c", alt: "Image 2" },
 
  { id: 4, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0029.jpg?alt=media&token=05233b32-4b20-42e5-a2c6-2fdb38d48a94", alt: "Image 4" },
 
 
  { id: 8, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0035.jpg?alt=media&token=c12f0864-9581-46cc-ba21-0f546648243a", alt: "Image 8" },
  { id: 9, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0037.jpg?alt=media&token=bc01ca21-c933-457d-9cbf-99516065aa1c", alt: "Image 9" },

  { id: 11, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0042.jpg?alt=media&token=7fb170f4-6e13-454e-839b-39f84e4dd265", alt: "Image 9" },
  { id: 12, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0044.jpg?alt=media&token=266a6278-068d-40e5-9ad2-b249f5286638", alt: "Image 9" },
  { id: 13, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0046.jpg?alt=media&token=1216acb2-a938-4e9c-8173-489e07bdd8ee", alt: "Image 9" },
  { id: 14, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0049.jpg?alt=media&token=48a35b36-236b-4141-844b-3af482b482fb", alt: "Image 9" },
  { id: 15, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0055.jpg?alt=media&token=4eee60f7-c9f6-44aa-a7f3-c157cf0ff6a8", alt: "Image 9" },
  { id: 16, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0058.jpg?alt=media&token=5ccd4c21-5f63-4de8-a828-470e930fc28c", alt: "Image 9" },
  { id: 17, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0063.jpg?alt=media&token=60595c3f-bfce-439d-8cce-02986381fcc1", alt: "Image 9" },

 
  { id: 20, src:"https://firebasestorage.googleapis.com/v0/b/jivithealthcare-802e2.firebasestorage.app/o/_DSC0084.jpg?alt=media&token=f62c2c88-6ac5-42c3-915e-647d01db12a5", alt: "Image 9" },

  
 
  
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
