import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imgOne from '../../assets/servicePage/gallery/1.png';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';

const Gallery = () => {
    const images = [imgOne, imgTwo, imgThree, imgFour];

    return (
        <section id='gallery' className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Smile Transformations"
                    title="Real Stories of Confidence Restored Through Expert Care"
                />

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ el: ".custom-pagination", clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="gallery-slider"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 1, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-img">
                                <img src={img} alt={`gallery-${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Move Pagination Below */}
                <div className="custom-pagination"></div>
            </div>
        </section>
    );
};

export default Gallery;
