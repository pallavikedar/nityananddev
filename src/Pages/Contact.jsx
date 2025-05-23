import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const phone = " 08788922905"; // Replace with actual phone number
  const email = "shreenagari2137@gmail.com"; // Replace with actual email address
  const whatsapp = "https://wa.me/87889229058"; // Replace with WhatsApp number link

  return (
    <div className="contact-us-container" id="contact">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-subtitle">
        We’d love to hear from you! Reach out through any of the following
        options.
      </p>

      {/* Contact Info Box */}
      <div
        className="contact-info-box"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Phone</h3>
            <p>
              <a href={`tel:${phone}`} className="contact-link">
                {phone}
              </a>
            </p>
            <p>
              <IoIosCall /> Call us directly
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaWhatsapp className="contact-icon" />
          <div className="contact-details">
            <h3>WhatsApp</h3>
            <p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>

        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Our Office</h3>
            <ol>
              <li>
                Umred Road, Dighori Naka Rd, beside Indin Petrol Pump, Nagpur,
                Maharashtra 440034
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Embedding Google Map */}
      <div className="address-map-container">
        <iframe
          title="Google Map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119109.21162544162!2d79.0606176367807!3d21.106072194192187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd4b8920d5b4c47%3A0xfd16c8360d7dc412!2sUmred%20Road%2C%20Dighori%20Naka%20Rd%2C%20beside%20Indin%20Petrol%20Pump%2C%20Nagpur%2C%20Maharashtra%20440034!3m2!1d21.106092099999998!2d79.14301929999999!5e0!3m2!1sen!2sin!4v1739526547767!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
