// import React from 'react';
// import './Testimonial.scss';
// import SectionTitle from '../../components/SectionTitle/SectionTitle';
// import imgOne from '../../assets/testimonial/1.png';
// import imgTwo from '../../assets/testimonial/2.png';
// import imgThree from '../../assets/testimonial/3.png';
// import imgfour from '../../assets/testimonial/4.jpg';
// import imgfive from '../../assets/testimonial/5.jpg';
// import imgsix from '../../assets/testimonial/6.jpg';
// import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
// import { AiFillStar } from "react-icons/ai";
// import Slider from "react-slick";

// const Testimonial = () => {

//     const testimonails = [
//         {
//             'img': imgOne,
//             'name': 'Rajani Chaudhari',
//             'description' : 'Dr. Sophia was amazing! My teeth whitening treatment was completed in no time. Highly recommended.',
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         },
//         {
//             'img': imgTwo,
//             'name': 'Saksham Verma',
//             'description' : 'Kosmix Dental in HSR Layout is my go-to place. Dr. Shankhadeep is excellent at handling dental issues.',
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         },
//         {
//             'img': imgfive,
//             'name': 'Aryan Gupta',
//             'description' : "I had a great experience. Dr. Shankhadeep's professionalism and expertise in dental implants are impressive. The clinic is well-equipped and clean.",
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         },
//         {
//             'img': imgThree,
//             'name': 'Sania Mahajan',
//             'description' : 'Dr. Shankhadeep performed my dental checkup and gave great advice. Kosmix Dental Clinic is a reliable and professional place for dental care.',
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         },
//         {
//             'img': imgfour,
//             'name': 'Vipin Tripathi',
//             'description' : 'I recently visited this dental clinic in HSR, wherein I met one of the finest dentist, Dr. Shankhadeep and had an outstanding experience. From the moment I walked into the clinic, the staff was welcoming and professional, making me feel comfortable right away.',
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         },
//         {
//             'img': imgsix,
//             'name': 'Lamia Sharfudheen',
//             'description' : "I had a great experience with Dr. Kishan Panicker G.* for my tooth extraction. The extraction was smooth, and I experienced minimal discomfort during recovery. I’m very pleased with the results and would highly recommend Dr. Panicker for any oral surgery needs!",
//             'ratings': [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
//         }
//     ];

//     // slider settings
//     const settings = {
//         dots: true, // Show dots for navigation
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 575,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <section id='testimonials' className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <SectionTitle 
//                         subTitle="What Our Patients Say"
//                         title="Heartfelt Reviews from Smiling Patients Across Bangalore"
//                         />
//                     </div>
                    
//                     <Slider {...settings} className="testimoni-slider">
//                     {
//                         testimonails.map((testimonail, index) => (
//                             <div key={index}> {/* Wrap each testimonial in a div */}
//                                 <TestimoniCard testimonail={testimonail} />
//                             </div>
//                         ))
//                     }
//                 </Slider>
//                 </div>

            
//             </div>
//         </section>
//     );
// };

// export default Testimonial;


import React, { useEffect } from "react";
import './Testimonial.scss';


export const Testimonial = (props) => {
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when unmounting
    };
  }, []); // Runs once when component mounts

  return (
    <div id="testimonials" className="elfsight-widget-container">
      {/* Elfsight Widget */}
      <div class="elfsight-app-d8832ac8-e628-4354-b3ee-57d1a7193e8a" data-elfsight-app-lazy></div>    </div>
  );
};
export default Testimonial;