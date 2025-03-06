import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./associates.scss";

import doc1 from "../../assets/associates/sophia.jpeg";
import doc2 from "../../assets/associates/kishan.jpeg";
import doc3 from "../../assets/associates/neelima.jpeg";
import doc4 from "../../assets/associates/salman.jpeg";

const associatesData = [
  {
    name: "Dr. Sophia Saud, MDS",
    image: doc1,
    info: "Endodontist & Aesthetic Specialist",
    details: [
      "Dr. Sophia Saud is a dedicated and highly skilled Endodontist and Aesthetic Specialist with a Master’s degree in Conservative Dentistry and Endodontics. She specializes in restorations, root canal treatments (RCTs), regenerative endodontic procedures, laser dentistry, smile designing, and veneer placements. Her expertise ensures patients receive top-tier dental care tailored to their unique needs.",
      "Committed to delivering the highest standard of care, Dr. Sophia follows strict clinical protocols and performs all treatments under high-powered magnification and proper isolation. This meticulous approach guarantees exceptional accuracy, improved patient comfort, and long-term treatment success. She continuously incorporates the latest advancements and techniques to enhance patient outcomes.",
      "Whether revitalizing teeth through advanced regenerative therapies or crafting flawless, natural-looking smiles, Dr. Sophia’s patient-centered approach sets her apart. She believes in blending artistry with precision, ensuring each patient leaves with a confident, healthy smile. Her dedication to excellence makes her a trusted expert in comprehensive and cutting-edge dental care."
    ]
  },
  {
    name: "Dr. Kishan Panicker G",
    image: doc2,
    info: "Dental Surgeon | Implantologist | Oral & Maxillofacial Surgeon",
    details: [
      "Dr. Kishan Panicker G is a highly skilled and experienced dental professional with over 18 years in the field. He holds a Master’s in Oral and Maxillofacial Surgery from Rajiv Gandhi University and has further honed his expertise through microvascular training at Mata Amrita Medical College, Cochin. Additionally, he is a Fellow and Diplomate of the International Congress of Oral Implantology and has completed the Master Clinician Program in Implantology at the University of Stony Brook, USA.",
      "Based in Bangalore, Dr. Kishan specializes in dental implants and associated grafting procedures, offering advanced surgical solutions to his patients. With over a decade of teaching experience, he is committed to both clinical excellence and education. As a respected member of the Indian Dental Association, the Indian Society of Oral Implantologists, the Indian Association of Oral and Maxillofacial Pathologists, and the Karnataka State Dental Council, he continues to uphold the highest standards of dental care."
    ]
  },
  {
    name: "Dr. Neelima B Prakash",
    image: doc3,
    info: "Dental Surgeon",
    details: [
      "Dr. Neelima B Prakash is a committed and proficient dental professional with a degree from Navodaya Dental College and Hospital. She is passionate about delivering precise and high-quality care, specializing in scaling, teeth whitening, restorations, tooth extractions, root canal treatments (RCTs), and crowns & bridges.",
      "With expertise in advanced regenerative therapies and smile enhancements, Dr. Neelima’s keen attention to detail and patient-focused approach make her a reliable choice for comprehensive and modern dental care."
    ]
  },
  {
    name: "Dr. Salman Khan",
    image: doc4,
    info: "Orthodontist",
    details: [
      "Dr. Salman Khan is a highly respected orthodontist with over 15 years+ of experience in the dental field. He has treated over 2,000+ orthodontic patients and more than 10,000+ general dentistry patients. His expertise in creating beautiful, healthy smiles, combined with his recognition as one of India's top 1% Invisalign platinum elite providers, makes him a leading figure in orthodontics."
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
      <h2 className="associates-title">Associate Dentist</h2>
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          
          pagination={{ clickable: true }}
        >
          {associatesData.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="row align-items-center flex-lg-row">
                {/* Image on the left for large screens, remains the same for mobile */}
                <div className="col-lg-4 text-center">
                  <div className="team-img1">
                    <img src={doctor.image} alt={doctor.name} className="img-fluid square-img" />
                  </div>
                </div>
                {/* Details on the right for large screens */}
                <div className="col-lg-8">
                  <h2 className="associates-name">
                    {doctor.name}
                  </h2>
                  <div className="d-lg-none">
                    <p className={`pt-3 ${expandedIndex === index ? "expanded" : "collapsed"}`}>
                      {doctor.info}
                    </p>
                    <ul className={`associates-list ${expandedIndex === index ? "expanded" : ""}`}>
                      {doctor.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </button>
                  </div>
                  <div className="d-none d-lg-block">
                    <p className="pt-3">{doctor.info}</p>
                    <ul className="associates-list">
                      {doctor.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Associates;
