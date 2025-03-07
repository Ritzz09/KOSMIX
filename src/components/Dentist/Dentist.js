import React, { useState } from 'react';
import './Dentist.scss';
import docImage from '../../assets/about/priority.jpeg';

const Dentist = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id='dentist' className='dentist-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-8">
                        <h2 className='dentist-title'>
                            Meet <br />
                            <span className="highlight">Dr. Shankhadeep Saha</span>
                        </h2>

                        <p style={{ color: 'black', fontWeight: 'bold', letterSpacing: '0.5px', textTransform: 'capitalize' }}>
                            MDS in Periodontics & Implantology
                        </p>
                        <div className="team-img d-lg-none d-block mb-4">
                            <img src={docImage} alt="Dr. Shankhadeep Saha" className="img-fluid rounded" />
                        </div>

                        <p className={`pt-3 ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        Dr. Saha is a distinguished dental specialist with over nine years of clinical expertise, known for his meticulous approach and commitment to excellence in modern dentistry. He embarked on his professional journey by earning a Bachelor of Dental Surgery (BDS) from the renowned Rajiv Gandhi University of Health Sciences. To further refine his expertise, he pursued a Master’s in Periodontics & Implantology (MDS) from the prestigious M. S. Ramaiah University of Applied Sciences, solidifying his proficiency in advanced dental procedures.
                        <br /><br />
                        His relentless pursuit of innovation has led him to complete comprehensive training in Laser Dentistry, Full Mouth Rehabilitation, Smile Designing, Dental Implantology and Cortico-Basal Implantology at M. S. Ramaiah University of Applied Sciences. These specialized programs have equipped him with the skills to deliver sophisticated, high-precision treatments that redefine modern oral healthcare.                            <br /><br />

                        Fueled by a passion for transforming smiles and enhancing oral well-being, Dr. Saha upholds the highest standards in patient care. His dedication to pioneering advancements in periodontics and implantology ensures that his patients receive cutting-edge treatments tailored to restore both function and aesthetics with unparalleled precision.                        </p>

                        {/* Dentist list only shows when expanded */}
                        {/* {isExpanded && (
                            <ul className="dentist-list">
                                <li>⭐ MDS in Conservative Dentistry & Endodontics </li>
                                <li>⭐ Master of Smile Makeovers </li>
                                <li>⭐ 8+ Years of Experience</li>
                                <li>⭐ Specialized in Root Canal Treatment (RCT)</li>
                                <li>⭐ Patient-Centered Approach</li>
                                <li>⭐ 100+ Smiles Restored Every Month</li>
                            </ul>
                        )} */}

                        {/* Read More / Read Less Button - Only on Mobile */}
                        <button className="read-more-btn d-lg-none" onClick={toggleReadMore}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>

                    <div className="col-lg-4 text-center d-none d-lg-block">
                        <div className="team-img">
                            <img src={docImage} alt="Dr. Shankhadeep Saha" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dentist;
