import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./thankyou.scss";

const ThankYou = () => {
  useEffect(() => {
    // Check if GTM script is already added
    if (!document.getElementById("google-tag-manager")) {
      const script = document.createElement("script");
      script.id = "google-tag-manager";
      script.innerHTML = `(function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
          'gtm.start': new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-P8PRFDC7');`;

      document.head.appendChild(script);
    }
  }, []);

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
        <h1 className='heading'>Thank You for Choosing Kosmix Dental Clinic!</h1>
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
