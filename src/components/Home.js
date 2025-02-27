import React from 'react';
import Navbar from './Navbar/Navbar';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import USP from './Usp/usp';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Gallery from './Gallery/Gallery';
import Scroll from './scroll/scroll';
import Clinic from './Clinic/Clinic';
import Dentist from './Dentist/Dentist';
import Team from './Team/Team';
import Equipments from './Equipment/Equipment';


const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <USP/>
            <Clinic />
            <Services/>
            <Dentist />
            <Gallery/>
            <Equipments/>
            <Testimonial/>
            <Appointment/>
            <Footer/>
            <Scroll/>
        </>
    );
};

export default Home;