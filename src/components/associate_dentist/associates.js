import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "./associates.scss";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

import doc1 from "../../assets/associates/sophia.jpeg";
import doc2 from "../../assets/associates/kishan.jpeg";
import doc3 from "../../assets/associates/neelima.jpeg";
import doc4 from "../../assets/associates/salman.jpeg";

const associatesData = [
  {
    name: "Dr. Sophia Saud",
    image: doc1,
    info: "MDS Endodontist & Aesthetic Specialist",
    details: [
      "Dr. Sophia Saud is a dedicated and highly skilled Endodontist and Aesthetic Specialist with a Master’s degree in Conservative Dentistry and Endodontics. She specializes in restorations, root canal treatments (RCTs), regenerative endodontic procedures, laser dentistry, smile designing, and veneer placements.",
      "Committed to delivering the highest standard of care, Dr. Sophia follows strict clinical protocols and performs all treatments under high-powered magnification and proper isolation.",
      "Whether revitalizing teeth through advanced regenerative therapies or crafting flawless, natural-looking smiles, Dr. Sophia’s patient-centered approach sets her apart."
    ],
    bulletPoint: [
      "Endodontist & Aesthetic Specialist (MDS).",
      "Expert in RCTs, veneers, and smile designing.",
      "Precision-focused with high-powered magnification.",
      "Skilled in laser dentistry & regenerative procedures."
    ]
  },
  {
    name: "Dr. Kishan Paniker G",
    image: doc2,
    info: "Dental Surgeon | Implantologist | Oral & Maxillofacial Surgeon",
    details: [
      "Dr. Kishan Panicker G is a highly skilled and experienced dental professional with over 18 years in the field. He holds a Master’s in Oral and Maxillofacial Surgery from Rajiv Gandhi University.",
      "Based in Bangalore, Dr. Kishan specializes in dental implants and associated grafting procedures, offering advanced surgical solutions to his patients.",
      "As a respected member of the Indian Dental Association, the Indian Society of Oral Implantologists, the Indian Association of Oral and Maxillofacial Pathologists, and the Karnataka State Dental Council, he continues to uphold the highest standards of dental care."
    ],
    bulletPoint: [
      "25+ years of experience.",
      "Master’s in Oral and Maxillofacial Surgery.",
      "Microvascular training - Cochin.",
      "Fellow & Diplomate – International Congress of Oral Implantology.",
      "Master Clinician Program in Implantology – USA.",
      "Dental Implants & Grafting Procedures Specialist.",
      "10+ years of Teaching Experience."
    ]
  }
];

const Associates = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="associates" className="associates-section pt-100" data-aos="fade-up" data-aos-duration="2000">
      <h2 className="associates-title">Our Expert Team</h2>
      <div className="container position-relative">
        {/* Left Navigation Button */}
        <button className="swiper-button-prev">
          <FaArrowLeft />
        </button>

        {/* Swiper Component */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {associatesData.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="row align-items-center flex-lg-row">
                <div className="col-lg-3 text-center">
                  <div className="team-img1">
                    <img src={doctor.image} alt={doctor.name} className="img-fluid square-img" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <h2 className="associates-name">{doctor.name}</h2>
                  
                  {/* Mobile View */}
                  <div className="d-lg-none">
                    <p className={`pt-3 ${expandedIndex === index ? "expanded" : "collapsed"}`}>{doctor.info}</p>
                    <ul className={`associates-list ${expandedIndex === index ? "expanded" : ""}`}>
                      {doctor.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    {/* Show bullet points only when expanded on mobile */}
                    {doctor.bulletPoint && expandedIndex === index && (
                      <ul className="bullet-points">
                        {doctor.bulletPoint.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  {/* Desktop View - Bullet points always visible */}
                  <div className="d-none d-lg-block">
                    <p className="pt-3">{doctor.info}</p>
                    <ul className="associates-list">
                      {doctor.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    {/* Bullet points always visible on desktop */}
                    {doctor.bulletPoint && (
                      <ul className="bullet-points">
                        {doctor.bulletPoint.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button className="swiper-button-next">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Associates;
