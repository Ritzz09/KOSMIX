import React, { useState, useEffect } from "react";
import { FaArrowUp, FaPhone, FaWhatsapp } from "react-icons/fa"; 
import "./scroll.css";


const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-buttons">
      {/* Call Button */}
      <a href="tel:+919035383984" className="call-btn">
        <FaPhone />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919035383984"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Scroll;
