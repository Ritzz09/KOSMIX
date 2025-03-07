import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
// import bannerImg from '../../assets/banner/1.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
// import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';



const Banner = () => {
    

    return (
        <section id = 'banner' className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Creating Beautiful Smiles Every Day</h1>
                                    <p> Advanced Dental Care in HSR Layout, Bangalore</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <a href="#contact">Book An Appointment</a>
                                        </div>
                                        

                                        {/* <div className="banner-call">
                                            <div className='call-text1'>
                                                <p style={{marginTop:'-10px'}}>Dental 24H Emergency</p>
                                                <h6>
                                                    <div><a href="tel:+919035383984">90353 83984</a></div>
                                                    <div><a href="tel:+918042083115">80420 83115</a></div>
                                                </h6>

                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    {/* <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div> */}
                                    {/* <div className='info-box'>
                                    <div className='info-text'>
                                            <p>Dr. Shankhadeep Saha</p>
                                            <p id="text"><small> B.D.S, M.D.S in Periodontics & Oral Implantology</small></p>
                                            
                                        </div>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>
                                    </div>   */}

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        {/* <img src={shapeOne} alt="shape" /> */}
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
        
    );
};


export default Banner;