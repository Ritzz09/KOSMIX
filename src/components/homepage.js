import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import USP from "./Usp/usp";
import Clinic from "./Clinic/Clinic";
import Services from "./Services/Services";
import Dentist from "./Dentist/Dentist";
import Associates from "./associate_dentist/associates";
import Gallery from "./Gallery/Gallery";
import Equipments from "./Equipment/Equipment";
import Testimonial from "./Testimonial/Testimonial";
import Appointment from "./Appointment/Appointment";
import Scroll from "./scroll/scroll";

const Homepage = () => {
  useEffect(() => {
    // ✅ Set meta tags for Homepage
    document.title = "Kosmix Dental Clinic | Best Dentist in HSR Layout, Bangalore";

    const metaDescription = document.querySelector('meta[name="description"]');
    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    const metaOgDesc = document.querySelector('meta[property="og:description"]');
    const canonical = document.querySelector('link[rel="canonical"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", "Looking for expert dental care in HSR Layout? Kosmix Dental Clinic offers advanced treatments with MDS specialists for implants, crowns, braces, and more.");
    } else {
      const desc = document.createElement('meta');
      desc.name = "description";
      desc.content = "Looking for expert dental care in HSR Layout? Kosmix Dental Clinic offers advanced treatments with MDS specialists for implants, crowns, braces, and more.";
      document.head.appendChild(desc);
    }

    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", "Kosmix Dental Clinic | Best Dentist in HSR Layout, Bangalore");
    }

    if (metaOgDesc) {
      metaOgDesc.setAttribute("content", "Looking for expert dental care in HSR Layout? Kosmix Dental Clinic offers advanced treatments with MDS specialists.");
    }

    if (canonical) {
      canonical.setAttribute("href", "https://www.kosmixdentalclinic.com/");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.kosmixdentalclinic.com/";
      document.head.appendChild(link);
    }

    return () => {
      // Optional: Cleanup if needed (not required for static content)
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default Homepage;
