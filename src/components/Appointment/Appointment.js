import React from 'react';
import './Appointment.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9989629433803!2d77.6485828!3d12.907787899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149953a107f5%3A0xdb63ec5c78e614!2sKosmix%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1737028890133!5m2!1sen!2sin'

    return (
        <section id='contact' className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div style={{padding:'20px'}} className="col-lg-8 col-md-6">
                        <div  className="appointment-form-area">
                            {/* <SectionTitle 
                            subTitle="Get in Touch with Us"
                            title ="Book an Appointment or Visit Us at HSR Layout Today!"
                            /> */}
                            <h2 className='section-title'>Get in Touch with Us</h2>
                            <h3 className='section-title'>Visit Our Dental Clinic in HSR Layout Today!</h3>


                            <ContactForm />
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-6">
                        <h2>Our Location</h2>
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Kosmix Dental Clinic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;