import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./thankyou.scss";

const ThankYou = () => {
  return (
    <div className='thank-you-container'>
      <div className='thank-you-box'>
        {/* SVG Envelope Icon */}
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="url(#gradient)"
            className="svg-icon"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#491c1c", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgb(139, 90, 73)", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.75l-8.625 6.48a1.5 1.5 0 01-1.875 0L2.25 7.5v-.75"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h1 className='heading'>Thank You for Choosing Symphony Dental Care!</h1>
        <p className='paragraph'>We Appreciate Your Message and Will Get Back to You Shortly</p>

        {/* Button */}
        <Link 
          to="/" 
          className='button' 
          onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
