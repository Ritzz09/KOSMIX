import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import "../Usp/usp.scss";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import '@fortawesome/fontawesome-free/css/all.min.css';


const uspData = [
  {
    icon: "far fa-smile",   // Changed from fa-smile-o
    title: "20000+",
    text: "Happy Smiles"
  },
  {
    icon: "fas fa-hospital", // Changed from fa-hospital-o
    title: "16+",
    text: "Years of Experience"
  },
  {
    icon: "fas fa-user-md",  // Same as before
    title: "1000+",
    text: "Dental Implants"
  },
  {
    icon: "fas fa-star",     // Same as before
    title: "4.9",
    text: "Google Rating"
  }
];


const USP = () => {
  return (
    <section id="usp" className="usp-section">
      <div className="container">
        <div className="usp-header text-center">
          <SectionTitle 
            subTitle="Celebrating Success"
            title="Counting Our Achievements"
          />
        </div>
        <div className="row">
          {uspData.map((usp, index) => (
            <div key={index} className="col-md-3 col-sm-6 text-center usp-box">
              <i className={`${usp.icon} fa-3x usp-icon`}></i>

              {/* Counting Animation */}
              <motion.h3
                className="usp-number"
                initial={{ opacity: 0, y: 20 }} // Start with invisible and slightly below
                animate={{ opacity: 1, y: 0 }}   // Animate to full visibility
                transition={{ delay: index * 0.2, duration: 0.5 }} // Delay staggered by index
              >
                {/* If the counter is for Google Rating, don't animate */}
                {usp.title === "4.9" ? (
                  <span>{usp.title}</span>
                ) : (
                  <Counter target={usp.title} isHappySmiles={usp.title === "20000+"} />
                )}
              </motion.h3>

              <p className="usp-text">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Component for counting animation
const Counter = ({ target, isHappySmiles }) => {
  const [count, setCount] = useState(0);
  const targetValue = parseFloat(target.replace(/[^\d.-]/g, "")); // Handle both integers and floats correctly
  const duration = isHappySmiles ? 500 : 2000; // Make "Happy Smiles" counter super fast (500ms)
  const step = isHappySmiles ? 50 : 1; // Increase step size for "Happy Smiles"

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const stepTime = Math.abs(Math.floor(duration / (end / step))); // Adjust step time based on the increment

    if (end <= 0) return;

    const interval = setInterval(() => {
      start += step;
      setCount(start);
      if (start >= end) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetValue, duration, step]);

  return <motion.span>{count}{target.includes("+") || target.includes(".") ? target.replace(/[0-9]/g, "") : ""}</motion.span>;
};

export default USP;
