import React from "react";
import logo from "../../assets/footer_logo.png";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import call from "../../assets/footer/calling.png";
import time from "../../assets/footer/time.png";
import location from "../../assets/footer/location.png";

const Footer = () => {
  const footerMenu = [
    { name: "About", link: "#clinic" },
    { name: "Services", link: "#services" },
    { name: "Dentist", link: "#dentist" },
    { name: "Team", link: "#associates" },
    { name: "Gallery", link: "#gallery" },
    
    // { name: "Equipments", link: "#equipments" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const footerContacts = [
    {
      title: "Phone Number",
      info: (
        <>
          9035383984 <br /> 080 4208 3115
        </>
      ),
      icon: call,
    },
    {
      title: "Open Hours",
      info: "10:00 AM - 11:00 PM",
      icon: time,
    },
    {
      title: "Clinic Address",
      info: "1086 Ground Floor 24th, A Cross 1161/1, 23rd Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
      icon: location,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <p>
              Kosmix Dental Clinic in HSR Layout, Bengaluru, offers advanced
              dental care with personalized treatments. This dental clinic
              ensures precision, comfort, and exceptional results for every
              patient.
            </p>

            <div className="social-icons">
              <p>Follow us on:</p>
              <div className="icons">
                <a target="_blanked" href="https://www.facebook.com/kosmixhsr">
                  <FaFacebookF />
                </a>
                <a target="_blanked" href="https://x.com/kosmixhsr">
                  <FaTwitter />
                </a>
                <a target="_blanked" href="https://www.instagram.com/kosmixhsr/">
                  <FaInstagram />
                </a>
                <a target="_blanked" href="https://www.youtube.com/@kosmixhsr">
                  <FaYoutube />
                </a>
                <a target="_blanked" href="https://www.pinterest.com/kosmixhsr/">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="section-title1">
              <p style={{marginBottom:'20px'}}>Quick Links</p>
            </div>
            <ul className="footer-links">
              {footerMenu.map((singleMenu, index) => (
                <li key={index}>
                  <a target="_blanked" href={singleMenu.link}>{singleMenu.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <div className="section-title2">
              <p>Contact & Information</p>
            </div>
            <ul className="footer-contacts">
              {footerContacts.map((footerContact, index) => (
                <li key={index} className="contact-item">
                  <img
                    src={footerContact.icon}
                    alt="icon"
                    className="contact-icon"
                  />
                  <div className="contact-text">
                    <p>{footerContact.title}</p>
                    <h5>{footerContact.info}</h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
        <p>
  &copy; 2025 Kosmix Dental Clinic. Design by{" "}
  <a target="_blanked" href="https://mastermindweb.in/" rel="noopener noreferrer">
    MasterMind Web Developers
  </a>
</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
