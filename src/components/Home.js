import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

// Pages
import Homepage from "./homepage"; // ✅ new component for home
import ThankYou from "./thankyou";

// Services
import CrownAndBridges from "../Pages/Services/dental-crowns-and-bridges-in-hsr";
import DentalImplants from "../Pages/Services/dental-implants-in-hsr";
import BracesAndAligners from "../Pages/Services/braces-and-aligners-in-hsr";
import TeethCleaning from "../Pages/Services/teeth-cleaning-in-hsr";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
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
      {/* ✅ Refactored Homepage */}
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />

      {/* Thank You */}
      <Route path="/thankyou" element={<ThankYou />} />

      {/* Service Pages */}
      <Route
        path="/services/dental-crowns-and-bridges-in-hsr"
        element={
          <Layout>
            <CrownAndBridges />
          </Layout>
        }
      />
      <Route
        path="/services/dental-implants-in-hsr"
        element={
          <Layout>
            <DentalImplants />
          </Layout>
        }
      />
      <Route
        path="/services/braces-and-aligners-in-hsr"
        element={
          <Layout>
            <BracesAndAligners />
          </Layout>
        }
      />
      <Route
        path="/services/teeth-cleaning-in-hsr"
        element={
          <Layout>
            <TeethCleaning />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Home;
