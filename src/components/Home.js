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

// Import new service pages
import DentalImplants from "../Pages/Services/Dental_implants";
import CrownAndBridges from "../Pages/Services/Crown&Bridges";
// import RootCanal from "./ServicesPages/RootCanal";
// import TeethWhitening from "./ServicesPages/TeethWhitening";

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
        path="/services/Crown&Bridges"
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
