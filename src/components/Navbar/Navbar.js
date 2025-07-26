import React, { useState } from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className='main-nav'>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavbarOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#clinic" onClick={handleNavLinkClick}>
                    ABOUT
                  </a>
                </li>

                {/* Dropdown for SERVICES */}
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                  </span>
                  <ul className="dropdown-menu">
                    {/* <li>
<Link className="dropdown-item" to="/services/dental-implants" onClick={handleNavLinkClick}>
                        Dental Implants
                      </Link>
                    </li> */}
                    <li>
                      <Link className="dropdown-item" to="/services/Crown&Bridges" onClick={handleNavLinkClick}>
                        Crown And Bridges
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/services/teeth-whitening" onClick={handleNavLinkClick}>
                        Teeth Whitening
                      </Link>
                    </li> */}
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#dentist" onClick={handleNavLinkClick}>
                    DENTIST
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#associates" onClick={handleNavLinkClick}>
                    TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery" onClick={handleNavLinkClick}>
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonials" onClick={handleNavLinkClick}>
                    TESTIMONIALS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>
                    CONTACT
                  </a>
                </li>
              </ul>
              {/* You can uncomment this if you use button */}
              {/* <div className="theme-btn">
                <a href="#contact">Book appointment</a>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
