import React, { useState } from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navbarItems = [
    {
      name: 'ABOUT',
      path: '#clinic',
    },
    {
      name: 'SERVICES',
      path: '#services',
    },
    {
      name: 'DENTIST',
      path: '#dentist',
    },
    {
      name: 'TEAM',
      path: '#associates',
    },
    {
      name: 'GALLERY',
      path: '#gallery',
    },
    {
      name: 'TESTIMONIALS',
      path: '#testimonials',
    },
    {
      name: 'CONTACT',
      path: '#contact',
    }
  ];

  const handleNavLinkClick = () => {
    // Close the navbar when a link is clicked on mobile view
    setIsNavbarOpen(false);
  };

  return (
    <div className='main-nav'>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
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
              {/* Navbar Links */}
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                {navbarItems.map((navSingle, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={navSingle.path} onClick={handleNavLinkClick}>
                      {navSingle.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Navbar Button */}
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
