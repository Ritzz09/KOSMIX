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
            <h2 className="section-title">
                                
                                <span className="highlight">Best Dental Clinic</span><br />
                                in HSR Layout 
                            </h2>
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-8">
                        <div className="priority-text">
                            {/* First Paragraph (Always Visible) */}
                            <p className="description">
Kosmix Dental Clinic in HSR Layout is led by Dr. Shankhadeep Saha, a trusted dentist in HSR, and supported by a skilled team committed to delivering personalized, high-quality care. With advanced technology and a focus on both preventive and restorative treatments, we ensure a hygienic, compassionate, and comfortable experience for every patient.
</p>

                            {/* Extra Content (Initially Hidden on Mobile) */}
                            <div className={`extra-content ${isExpanded ? "show" : ""} ${isDesktop ? "desktop-visible" : ""}`}>
                                <p className="description">
We offer a comprehensive range of dental services, including root canal treatments, gum care, crowns and bridges, dentures, dental implants, braces and aligners, smile makeovers, veneers, teeth whitening, and pediatric dental care. Whether you need preventive care, restorative procedures, or cosmetic enhancements, we provide advanced solutions for every dental concern.
<br /><br />
At Kosmix Dental Clinic, your care is in the hands of dedicated experts. Our team includes an experienced Endodontist, Periodontist, Prosthodontist, Implantologist, Orthodontist, Cosmetic Dentist, and Pediatric Dentist in HSR Layout, each specializing in their respective fields to ensure you receive the highest quality treatment.
<br /><br />
We prioritize your comfort and well-being with personalized treatment plans tailored to your needs—whether it’s a routine check-up, emergency care, or a complete smile makeover. Our experienced team ensures pain-free procedures, prompt attention to urgent issues like toothaches or fractures, and a stress-free experience for patients of all ages.
<br /><br />
If you're searching online for a "dental clinic near me" or "dentist near me", Kosmix Dental Clinic in HSR Layout is your trusted destination for expert, compassionate, and advanced dental care.
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

                    <div className="col-lg-4 text-center">
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
