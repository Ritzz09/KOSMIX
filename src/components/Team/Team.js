import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';
import imgFour from '../../assets/about/team/4.png';

const Team = () => {
    const teams = [
        { img: imgOne, name: 'Dianne Russell' },
        { img: imgTwo, name: 'Esther Howard' },
        { img: imgThree, name: 'Darrell Steward' },
        { img: imgFour, name: 'Jenny Wilson' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id='team' className='team-section1 pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the dentalist dental Team"
                        />
                    </div>
                    <div className="col-lg-5">
                        <p className='pt-5'>Kosmix Dental Clinic features a team of highly skilled dentists in HSR Layout, dedicated to providing exceptional dental care tailored to each patient’s needs. </p>
                    </div>
                </div>

                <Slider {...settings}>
                    {teams.map((team, index) => (
                        <div key={index} className="team-card">
                            <div className="team-img1">
                                <img src={team.img} alt={team.name} />
                            </div>
                            <h3>{team.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Team;