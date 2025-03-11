import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Appointment from "./Appointment/Appointment";
import Associates from "./associate_dentist/associates";
import Banner from "./Banner/Banner";
import USP from "./Usp/usp";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Gallery from "./Gallery/Gallery";
import Scroll from "./scroll/scroll";
import Clinic from "./Clinic/Clinic";
import Dentist from "./Dentist/Dentist";
import Equipments from "./Equipment/Equipment";
import ThankYou from "./thankyou";

const Layout = ({ children }) => {
    const location = useLocation();
    return location.pathname !== "/thankyou" ? (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    ) : (
        children
    );
};

const Home = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Banner />
                        <USP />
                        <Clinic />
                        <Services />
                        <Dentist />
                        <Associates />
                        <Gallery />
                        <Equipments />
                        <Testimonial />
                        <Appointment />
                        <Scroll />
                    </Layout>
                }
            />
            <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
    );
};

export default Home;
