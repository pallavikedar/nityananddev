import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact-icons-container">
      <a
        href="https://wa.me/9890268268"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon2 whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
      <a href="tel:9765533055" className="contact-icon2 call-icon">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactIcons;
