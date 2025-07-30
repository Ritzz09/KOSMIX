import React from "react";
import "./Service_pages.scss";
import img from "./services/teeth_cleaning.jpg";
import img2 from "../../../src/assets/about/clinic/1.JPG";
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineStarPurple500, MdOutlineHealthAndSafety } from "react-icons/md";
import { GiGoldBar } from "react-icons/gi";
import { FaTooth, FaRegSmileBeam } from "react-icons/fa";
import { FaMicroscope, FaSmile, FaThumbsUp, FaStar } from 'react-icons/fa';
import { FaUserMd, FaHeart, FaShieldAlt, FaClinicMedical } from 'react-icons/fa';

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TeethCleaning = () => {


  const disadvantages = [
    {
      title: "Tooth Reduction",
      description:
        "The preparation process involves removing some natural tooth structure, which is irreversible.",
    },
    {
      title: "Sensitivity",
      description:
        "Some patients may experience temporary sensitivity to hot or cold after the procedure.",
    },
    {
      title: "Cost",
      description:
        "While an investment in oral health, the cost can be a factor for some patients. (However, at Kosmix, we offer affordable options).",
    },
    {
      title: "Maintenance",
      description:
        "While durable, crowns and bridges still require good oral hygiene to prevent decay around the margins and maintain gum health.",
    },
    {
      title: "Not Always Ideal for Large Gaps",
      description:
        "For very large gaps with many missing teeth, dental implants might be a more suitable long-term solution.",
    },
  ];


  const benefits = [
    {
      category: "Preventive Care",
      benefit: "Removes Plaque and Tartar",
      description: "Professional scaling eliminates stubborn plaque and hardened tartar that regular brushing can't remove.",
    },
    {
      category: "Preventive Care",
      benefit: "Prevents Gum Disease",
      description: "Regular cleaning helps keep gums healthy and reduces the risk of gingivitis and periodontitis.",
    },
    {
      category: "Preventive Care",
      benefit: "Prevents Tooth Decay",
      description: "By removing plaque, scaling lowers the chance of cavities and tooth decay.",
    },
    {
      category: "Fresh Breath",
      benefit: "Eliminates Bad Breath",
      description: "Cleaning removes bacteria and deposits that cause persistent bad breath.",
    },
    {
      category: "Aesthetics",
      benefit: "Restores Tooth Appearance",
      description: "Teeth look cleaner, brighter, and healthier after scaling and polishing.",
    },
    {
      category: "Gum Health",
      benefit: "Improves Gum Health",
      description: "Reduces inflammation and helps gums fit more snugly around teeth.",
    },
    {
      category: "Tooth Protection",
      benefit: "Prevents Tooth Loss",
      description: "Healthy gums and reduced tartar buildup protect teeth from loosening and falling out.",
    },
    {
      category: "Overall Health",
      benefit: "Promotes Overall Oral Health",
      description: "Supports a healthier mouth, which is linked to better systemic health and lower risk of heart disease and diabetes.",
    },
  ];


  const reasons = [
    {
      icon: <FaUserMd />,
      title: 'Experienced Professionals',
      description: 'Led by Dr. Shankhadeep Saha, a skilled and trusted dentist with expertise in preventive and cosmetic dentistry.'
    },
    {
      icon: <FaTooth />,
      title: 'Advanced Equipment',
      description: 'State-of-the-art tools for safe, effective scaling and polishing.'
    },
    {
      icon: <FaHeart />,
      title: 'Patient-Centric Approach',
      description: 'Gentle care tailored to each patient’s comfort and oral health needs.'
    },
    {
      icon: <FaThumbsUp />,
      title: 'Highly Rated Clinic',
      description: 'Trusted by many in HSR Layout for quality dental care and excellent results.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Strict Hygiene Standards',
      description: 'Clean, sterilized environment ensuring complete safety.'
    },
    {
      icon: <FaClinicMedical />,
      title: 'Comprehensive Services',
      description: 'Full range of dental treatments, from cleanings to implants, under one roof.'
    }
  ];



  return (
    <>

      <div className="service1-section">
        <Helmet>
          <title>Teeth Cleaning in HSR Layout | Scaling and Polishing Near Me</title>
          <meta
            name="description"
            content="Looking for teeth cleaning, or scaling and polishing in HSR Layout, Bengaluru? Visit us for safe, professional oral hygiene care by experienced dentists committed to keeping your smile healthy and bright."
          />
          <link
            rel="canonical"
            href="https://www.kosmixdentalclinic.com/services/teeth-cleaning-in-hsr-layout"
          />
        </Helmet>

        <div className="hero">
          <h1 className="service1-title-text" data-aos="fade-down" data-aos-delay="200" style={{ fontFamily: 'initial' }}>
            Teeth Cleaning (Scaling and Polishing) in HSR Layout
          </h1>

          <div className="hero-content">
            <div className="hero-image" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
              <img src={img} alt="Dental Teeth Cleaning" />
            </div>

            <div className="hero-text" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
              <p>
                Keeping your teeth healthy involves more than just daily brushing and flossing.
                Over time, plaque and tartar can accumulate in areas that are difficult to clean,
                leading to gum disease, bad breath, and tooth discoloration. That’s why teeth
                cleaning in HSR Layout, including scaling and polishing, is essential for long-term
                oral hygiene.
              </p>
              <p>
                If you're searching for dental cleaning near me, or even laser teeth cleaning options,
                Kosmix Dental Clinic offers it all. We specialize in thorough and gentle scaling and
                polishing, helping patients maintain clean, healthy smiles.
              </p>
              <p>
                Whether you're searching for scaling and polishing near me or simply need routine
                dental maintenance, our clinic in HSR Layout, Bengaluru offers advanced equipment,
                a comfortable environment, and experienced care that delivers visible results in just
                one visit.
              </p>
            </div>
          </div>
        </div>


        <div className="content" data-aos="fade-up" data-aos-delay="300" >
          <SectionTitle title="What is Scaling and Polishing?" />
          <div className="text_first" >
            <p1>
              Scaling and Polishing is a professional teeth cleaning procedure aimed at removing plaque, tartar (hardened plaque), and stains from the teeth.
              Scaling involves carefully scraping off plaque and tartar buildup from the surface of your teeth and below the gumline using special dental instruments, often ultrasonic scalers.
              Polishing follows scaling and smooths the tooth surfaces to remove any remaining stains and make it harder for plaque to stick again.
            </p1>
          </div>
        </div>

        <section className="importance-section">
          <div className="content">
            <h2 className="section-title" data-aos="fade-up">Why is Teeth Cleaning Important?</h2>
            <p1 className="text_first" data-aos="fade-up" data-aos-delay="100">
              Teeth cleaning is important because it helps maintain your overall oral health and prevents various dental problems. Here’s why it matters:
            </p1>
          </div>

          <div className="importance-cards-container">
            {[
              {
                title: "● Prevents Tooth Decay",
                desc: "Regular cleaning removes plaque that produces acids damaging tooth enamel, preventing cavities and decay.",
              },
              {
                title: "● Avoids Gum Disease",
                desc: "Cleaning helps remove tartar buildup that irritates gums, reducing risks of gingivitis and more severe periodontal diseases which can cause gum recession and tooth loss.",
              },
              {
                title: "● Prevents Bad Breath",
                desc: "Removing food particles and bacteria through cleaning eliminates the sources of persistent bad breath (halitosis).",
              },
              {
                title: "● Maintains Overall Oral Health",
                desc: "Clean teeth reduce the risk of infections and inflammation in the mouth, keeping teeth and gums healthy.",
              },
              {
                title: "● Protects Against Tooth Loss",
                desc: "Preventing gum disease and decay through cleaning helps maintain the structural integrity of teeth and jawbone, reducing tooth loss risks.",
              },
              {
                title: "● Detects Oral Health Issues Early",
                desc: "Regular cleaning sessions with a dentist allow early detection of cavities, gum disease, oral cancer, and other problems before they worsen.",
              },
              {
                title: "● Enhances Appearance",
                desc: "Cleaning removes stains from coffee, tea, smoking, and foods, making teeth look whiter and brighter for a confident smile.",
              },
              {
                title: "● Boosts Overall Health",
                desc: "Poor oral hygiene is linked to heart disease, diabetes, respiratory infections, and other systemic conditions. Cleaning helps reduce these health risks.",
              },
              {
                title: "● Improves Breath and Comfort",
                desc: "Regular cleaning reduces plaque and tartar buildup that cause discomfort, sensitivity, and swollen gums.",
              },
            ].map((item, index) => (
              <div className="importance-card" data-aos="fade-up" data-aos-delay={150 + index * 100} key={index}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <br />
          <p className="importance-footer" data-aos="fade-up" data-aos-delay="700">
            At Kosmix Dental Clinic, our skilled dentists offer preventive care trusted by numerous patients in HSR Layout for their regular oral health maintenance. Whether you're inquiring about teeth cleaning price, deep teeth cleaning in HSR, or simply looking for the best dental teeth cleaning near me, our team is here for you.
          </p>
        </section>



        <section className="timeline-container" style={{ overflowX: 'hidden', padding: '0 1rem' }}>
          <div className="content" data-aos="fade-up">
            <SectionTitle title="What to Expect During the Procedure" />
            <p className="text_first">
              The procedure is generally painless and lasts about 30–60 minutes. Many patients looking for teeth cleaning, scaling and polishing in Bengaluru prefer Kosmix Dental Clinic for its comfortable experience:
            </p>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">🩺</div>
            <div className="timeline-content">
              <h3>Initial Examination</h3>
              <p>Dentist checks teeth and gums for plaque and tartar to assess cleaning needs.</p>
            </div>
            <div className="timeline-icon">1</div>
          </div>

          <div className="timeline-step" data-aos="fade-left">
            <div className="timeline-icon">🦷</div>
            <div className="timeline-content">
              <h3>Scaling</h3>
              <p>Removal of plaque and tartar buildup using specialized ultrasonic and hand tools.</p>
            </div>
            <div className="timeline-icon">2</div>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">✨</div>
            <div className="timeline-content">
              <h3>Polishing</h3>
              <p>Teeth are polished to remove surface stains and smoothen tooth surfaces for a brighter smile.</p>
            </div>
            <div className="timeline-icon">3</div>
          </div>

          <div className="timeline-step" data-aos="fade-left">
            <div className="timeline-icon">🛡️</div>
            <div className="timeline-content">
              <h3>Fluoride Treatment (Optional)</h3>
              <p>A protective fluoride layer may be applied to strengthen enamel and help prevent decay.</p>
            </div>
            <div className="timeline-icon">4</div>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">📋</div>
            <div className="timeline-content">
              <h3>Post-Care Advice</h3>
              <p>Dentist provides tips for maintaining oral hygiene and discusses any follow-up if needed.</p>
            </div>
            <div className="timeline-icon">5</div>
          </div>
        </section>


        <section className="benefits-section" data-aos="fade-up">
          <div className="benefits-wrapper">
            <div className="content">
              <h2 className="section-title">Benefits of Dental Crowns & Bridges</h2>
            </div>
            <div className="table-responsive">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Advantage Category</th>
                    <th>Specific Benefit</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {benefits.map((item, index) => (
                    <tr key={index}>
                      <td className="category-cell">
                        {index === 0 ||
                          item.category !== benefits[index - 1].category
                          ? item.category
                          : ""}
                      </td>
                      <td>{item.benefit}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="advantages-section">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Disadvantages of Crowns and Bridges Teeth Scaling and Polishing" />

            <p1 className="text_first">
              While highly effective, it's important to be aware of the following:
            </p1>
          </div>

          <div className="advantages-grid">
            {disadvantages.map((item, index) => (
              <div
                key={index}
                className="advantage-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaCheckCircle className="advantage-icon" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section" data-aos="fade-up">
          <div className="pricing-content">
            <div className="text-area">
              <div className="content" data-aos="fade-up">
                <SectionTitle title="Cost of Teeth Cleaning (Scaling and Polishing) in Bengaluru" />

                <p>
                  At Kosmix Dental Clinic, we believe preventive care should be both high-quality and affordable.
                  Our transparent pricing covers consultation and standard scaling and polishing, so you always
                  know what to expect.
                </p>

                <p>
                  Note: The procedure cost includes scaling and polishing. Additional treatments like deep teeth cleaning
                  in HSR or fluoride application may incur extra charges. If you're comparing dental cleaning costs in HSR,
                  our commitment to transparent pricing ensures affordable care without compromising quality.
                </p>
              </div>
            </div>

            <div className="price-cards">
              <div className="price-card">
                <div className="tag">Consultation Fee</div>
                <h3 className="price">₹500</h3>
                <p className="desc">
                  One-time consultation with our experienced dentist
                </p>
              </div>

              <div className="price-card">
                <div className="tag">Procedure Cost</div>
                <h3 className="price">₹800 – ₹1,500</h3>
                <p className="desc">
                  Includes thorough scaling and polishing
                </p>
              </div>

              <div className="price-card premium">
                <div className="tag premium-tag">Total Estimated</div>
                <h3 className="price">₹1,300 – ₹2,000</h3>
                <p className="desc">
                  Final cost may vary based on your oral condition and any extra treatments
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="content" data-aos="fade-up" data-aos-delay="300" >
          <SectionTitle title="How Often Should You Get Teeth Cleaning Done?" />
          <div className="text_first" >
            <p1>
              It’s generally recommended to get professional teeth cleaning every 6 months. However, depending on your oral health, your dentist might suggest more frequent visits, such as every 3–4 months, especially if you have gum disease or heavy tartar buildup.
            </p1>
          </div>
        </div>


        <section className="why-kosmix-timeline">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Why Choose Kosmix Dental Clinic for Teeth Cleaning in Bengaluru?" />
            <p1 className="text_first">
              Our reputation as a preferred choice for teeth cleaning in Bengaluru is built on a commitment to professional expertise, advanced technology, and patient-centered care:
            </p1>

          </div>
          <div className="timeline">
            {reasons.map((reason, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-icon">{reason.icon}</div>
                <div className="timeline-content">
                  <h3>{reason.title}</h3>
                  <p
                    style={{
                      display: window.innerWidth <= 768 ? 'none' : 'block'
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        <div className="hero">
          <h1 className="service1-title-text" data-aos="fade-down" data-aos-delay="200" style={{ fontFamily: 'initial' }}>
            Visit the Best Clinic for Scaling and Polishing in Bengaluru
          </h1>

          <div className="cleaning-hero-content">
            <div
              className="cleaning-hero-text"
              data-aos="zoom-in-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <p>
                Don’t let plaque or stains lead to bigger dental problems. Choose Kosmix Dental Clinic in HSR, a well-established dental clinic offering quality care in a clean, patient-friendly environment.
              </p>
              <p>
                Under the guidance of Dr. Shankhadeep Saha, our team provides gentle and thorough teeth cleaning, including laser teeth cleaning and deep teeth cleaning in HSR, ensuring your oral health stays on track.
              </p>
              <p>
                From scaling and polishing in HSR Layout to preventive care, we are committed to making every visit comfortable and stress-free.
              </p>
            </div>

            <div
              className="cleaning-hero-image"
              data-aos="zoom-in-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <img src={img2} alt="Clinic Image" />
            </div>
          </div>
        </div>



        <section className="cta-section" data-aos='zoom-in'>
          <div className="cta-content">
            <h2>
              Schedule Your Appointment <span>Today!</span>
            </h2>
            <p>
              Discover the best crowns and bridges treatment at Kosmix with cutting-edge technology and top-rated care.
            </p>
            <div className="cta-buttons">
              <Link to="/#appointment" >
                <button className="btn-primary">Book Appointment</button>

              </Link>
            </div>
          </div>
        </section>



      </div>

    </>
  );
};

const SectionTitle = ({ title }) => (
  <h2 className="section-title">{title}</h2>
);



export default TeethCleaning;
