import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../SectionTitle/SectionTitle";
import priorityImg1 from "../../assets/about/clinic/4.jpg";
import priorityImg2 from "../../assets/about/clinic/5.jpg";
import priorityImg3 from "../../assets/about/clinic/6.jpg";
import priorityImg4 from "../../assets/about/clinic/8.jpg";
import priorityImg5 from "../../assets/about/clinic/9.jpg";
import priorityImg6 from "../../assets/about/clinic/10.jpg";
import priorityImg7 from "../../assets/about/clinic/11.jpg";


import "./Clinic.scss";

const Priority = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="clinic" className="priority-section pt-100">
            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-7">
                        <div className="priority-text">
                            <h2 className="section-title">
                                Welcome to <br />
                                <span className="highlight">Kosmix Dental Clinic</span>
                            </h2>

                            {/* First Paragraph (Always Visible) */}
                            <p className="description">
                                Kosmix Dental Clinic features a team of highly skilled dentists in HSR Layout, dedicated to providing exceptional dental care tailored to each patient’s needs. With a focus on both preventive and restorative treatments, the clinic ensures that every visit is a positive experience, combining expertise with a compassionate approach.
                            </p>

                            {/* Extra Content (Initially Hidden on Mobile) */}
                            <div className={`extra-content ${isExpanded ? "show" : ""} ${isDesktop ? "desktop-visible" : ""}`}>
                                <p className="description">
                                    As a leading dental clinic in HSR Layout, it is equipped with state-of-the-art technology and adheres to the highest standards of hygiene and patient care. The clinic's commitment to excellence is reflected in the personalized treatment plans designed to achieve optimal oral health and beautiful smiles for all patients.
                                    <br /><br />
                                    Our approach is patient-centered, ensuring that you receive the best possible care in a comfortable and welcoming environment. Whether you need a routine check-up, advanced dental treatments, or a complete smile makeover, we are here to help.
                                </p>
                            </div>

                            {/* Read More / Read Less Button (Only for Mobile) */}
                           
                        </div>
                        {!isDesktop && (
                                <button className="read-more-btn" onClick={toggleReadMore}>
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}
                    </div>

                    <div className="col-lg-5 text-center">
                        <div className="priority-slider">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop
                            >
                                <SwiperSlide>
                                    <img src={priorityImg1} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg2} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg3} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg4} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg5} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg6} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={priorityImg7} alt="Clinic" className="img-fluid rounded" />
                                </SwiperSlide>
                           
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;
