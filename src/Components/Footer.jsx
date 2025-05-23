import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-container2">
          <img src={logo} alt="logo" className="logo2" />
        </div>
        {/* Company Info Section */}
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li>
              <a href="#about" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}

        {/* Address Section */}
        <div className="footer-section">
          <h3 className="footer-title">Our Locations</h3>
          <ul className="footer-address">
            <li>
              Umred Road, Dighori Naka Rd, beside Indin Petrol Pump, Nagpur,
              Maharashtra 440034
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Shree Swami Nityanand All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
