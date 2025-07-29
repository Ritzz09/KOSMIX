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
import { useEffect } from "react";  

// Import new service pages
import DentalImplants from "../Pages/Services/Dental_implants";
import CrownAndBridges from "../Pages/Services/CrownandBridges";
// import RootCanal from "./ServicesPages/RootCanal";
// import TeethWhitening from "./ServicesPages/TeethWhitening";

const Layout = ({ children }) => {
  const location = useLocation();
   useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // delay to ensure layout is mounted
    }
  }, [location]);
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

      {/* Service Pages Routes */}
      <Route
        path="/services/dental-implants"
        element={
          <Layout>
            <DentalImplants />
          </Layout>
        }
      />
       <Route
        path="/services/CrownandBridges"
        element={
          <Layout>
            <CrownAndBridges />
          </Layout>
        }
      />
      {/* <Route
        path="/services/root-canal"
        element={
          <Layout>
            <RootCanal />
          </Layout>
        }
      />
      <Route
        path="/services/teeth-whitening"
        element={
          <Layout>
            <TeethWhitening />
          </Layout>
        }
      /> */}
    </Routes>
  );
};

export default Home;
