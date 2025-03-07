import React from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

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

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <a className="nav-link" href={navSingle.path}>{navSingle.name}</a>
                                    </li>
                                    ) 
                                }
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