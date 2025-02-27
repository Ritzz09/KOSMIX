import React, { useState, useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import './Services.scss';

const servicesData = [
  { title: 'Full Mouth Rehabilitation', description: 'Comprehensive treatment to restore function and aesthetics to your entire mouth.' },
  { title: 'Dental Implants', description: 'Permanent solutions for missing teeth that look and feel like natural ones.' },
  { title: 'Root Canal Treatment', description: 'A procedure to save a damaged tooth by removing infected pulp and sealing it.' },
  { title: 'Braces & Aligners', description: 'Effective orthodontic options to straighten teeth and improve your smile.' },
  { title: 'Crown & Bridges', description: 'Restorative solutions to strengthen damaged teeth and fill gaps from missing ones.' },
  { title: 'Dental Veneers', description: 'Thin shells that enhance the appearance of teeth, providing a beautiful smile makeover.' },
  { title: 'Teeth Whitening', description: 'Professional treatments to brighten your smile and remove stains effectively.' },
  { title: 'Tooth Extraction', description: 'Safe removal of problematic teeth to maintain oral health and prevent further issues.' },
  { title: 'Dentures', description: 'Custom-made removable appliances that replace missing teeth for improved function and aesthetics.' },
  { title: 'Pediatric Dentistry', description: 'Specialized dental care tailored for children to ensure healthy smiles from an early age.' }
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = servicesData.length;

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2); 
      } else {
        setSlidesToShow(4); 
      }
    };
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % (totalSlides - slidesToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - 1)
    );
  };

  return (
    <section id='services' className='service-section' data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <SectionTitle title="Comprehensive Dental Solutions for All Your Oral Health Needs" subTitle="Our Services" />
          </div>
        </div>
      </div>

      <div className="service-slider-container">
        <div className="service-slider" style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
          {servicesData.map((service, index) => (
            <div className="slider-item" key={index} style={{ flex: `0 0 ${100 / slidesToShow}%` }}>
              <div className="service-card">
                <div className="content">
                  <p className="heading">{service.title}</p>
                  <p className="para">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button onClick={prevSlide} className="prev-slide">❮</button>
          <button onClick={nextSlide} className="next-slide">❯</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
