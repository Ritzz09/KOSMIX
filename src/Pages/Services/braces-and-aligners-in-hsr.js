import React from "react";
import "./Service_pages.scss";
import img from "./services/braces&aligners.jpeg";
import dentalImage from "./services/dental.png";
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineStarPurple500, MdOutlineHealthAndSafety } from "react-icons/md";
import { FaTooth } from "react-icons/fa";
import { FaSmile } from 'react-icons/fa';
import { FaUserMd, FaLaptopMedical, FaClinicMedical, FaHeart, FaRupeeSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BracesAndAligners = () => {

  const types = [
    {
      title: "Metal Braces",
      icon: <FaTooth />,
      desc: "Most effective for complex dental alignment issues. Economical and durable, they’re an ideal choice for children and teenagers who need reliable orthodontic treatment.",
    },
    {
      title: "Ceramic Braces",
      icon: <MdOutlineStarPurple500 />,
      desc: "These tooth-colored brackets offer less visibility compared to metal braces, making them popular among teens and adults. They provide the same functionality and effectiveness while blending better with natural teeth.",
    },
    {
      title: "Clear Aligners (Invisible Braces)",
      icon: <MdOutlineHealthAndSafety />,
      desc: "Removable, transparent trays that are virtually invisible—perfect for working professionals. They’re comfortable, hygienic, and easy to maintain, suitable for mild to moderate corrections. We offer advanced brands like Invisalign, Flash Aligners, and Customized Aligners tailored to your needs.",
    },
  ];


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



  const reasons = [
    {
      icon: <FaUserMd />,
      title: 'Experienced Orthodontists',
      description: 'Specialized professionals with 10+ years of orthodontic care'
    },
    {
      icon: <FaLaptopMedical />,
      title: 'Advanced Technology',
      description: '3D imaging, digital smile design, and AI-powered aligner planning'
    },
    {
      icon: <FaClinicMedical />,
      title: 'Modern, Hygienic Facility',
      description: 'Clean, child-friendly clinic with cutting-edge equipment'
    },
    {
      icon: <FaHeart />,
      title: 'Personalized Attention',
      description: 'Every patient receives a custom treatment plan tailored to their lifestyle'
    },
    {
      icon: <FaRupeeSign />,
      title: 'Affordable Treatment & EMI Plans',
      description: 'Transparent pricing with zero-interest installment options'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Prime Location in HSR Layout',
      description: 'Easily accessible from Koramangala, Sarjapur Road, and BTM Layout'
    },
    {
      icon: <FaSmile />,
      title: '1000+ Happy Patients',
      description: 'Rated among the best dental clinics in South Bengaluru'
    }
  ];




  return (
    <>

      <div className="service1-section">
        <Helmet>
          <title>Braces & Aligners in HSR Layout | Teeth Aligners Cost in HSR</title>
          <meta
            name="description"
            content="Looking for braces or aligners in HSR Layout? At Kosmix Dental Clinic, Dr. Shankhadeep Saha offers expert, personalized orthodontic care for all smile types."
          />
          <link
            rel="canonical"
            href="https://www.kosmixdentalclinic.com/services/braces-and-aligners-in-hsr-layout"
          />
        </Helmet>

        <div className="hero">
          <h1 className="service1-title-text" data-aos="fade-down" data-aos-delay="200" style={{ fontFamily: 'initial' }}>
            Braces and Aligners in HSR Layout
          </h1>

          <div className="hero-content">
            <div className="hero-image" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
              <img src={img} alt="Dental Braces and Aligners" />
            </div>

            <div className="hero-text" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
              <p>
                Our orthodontic treatments are tailored for both teens and adults, offering effective solutions to straighten crooked teeth, close gaps, and correct bite issues, all while prioritizing comfort and aesthetics. At Kosmix Dental Clinic, we specialize in braces and aligners in HSR Layout, blending advanced technology with personalized care.
              </p>
              <p>
                Led by Dr. Shankhadeep Saha, a specialist with a Master’s in Orthodontics and over 9 years of clinical experience, we ensure your orthodontic journey is smooth, precise, and confidence-boosting from start to finish.
              </p>
              <p>
                From traditional metal braces to modern ceramic braces and virtually invisible clear aligners, we offer comprehensive options to suit every lifestyle and budget. Our approach focuses not just on improving dental alignment but also on enhancing facial harmony and overall oral health.
              </p>

            </div>

          </div>
        </div>


        <div className="content" data-aos="fade-up" data-aos-delay="300" >
          <SectionTitle title="What Are Braces and Aligners?" />
          <div className="text_first">
            <p1>
              Braces and aligners are dental devices used to correct misaligned teeth, crowded teeth, spacing, and bite problems (overbite, underbite, etc.).
            </p1>
            <ul>
              <li>
                <strong>Braces</strong> use metal or ceramic brackets and wires to gently move teeth into the correct position over time.
              </li>
              <li>
                <strong>Aligners</strong> are clear, removable trays (like Invisalign) that gradually shift your teeth without the use of wires or brackets.
              </li>
            </ul>
          </div>
        </div>


        <section className="importance-section">
          <div className="content">
            <h2 className="section-title" data-aos="fade-up">Why Do You Need Braces or Aligners?</h2>
            <p1 className="text_first" data-aos="fade-up" data-aos-delay="100">
              Braces or aligners aren’t just cosmetic—they improve oral health and prevent complications such as:
            </p1>
          </div>

          <div className="importance-cards-container">
            {[
              {
                title: "● Difficulty chewing or speaking",
              },
              {
                title: "● Jaw pain or TMJ problems",
              },
              {
                title: "● Tooth decay due to improper cleaning",
              },
              {
                title: "● Gum disease",
              },
              {
                title: "● Uneven tooth wear or enamel damage",
              },
              {
                title: "● Low self-confidence due to an unbalanced smile",
              },
            ].map((item, index) => (
              <div className="importance-card1" data-aos="fade-up" data-aos-delay={150 + index * 100} key={index}>
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
          <br />
        </section>


        <section className="why-choose-us">
          <div className="wrapper">
            <div
              className="image-side"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img src={dentalImage} alt="Braces and Aligners" />
            </div>

            <div
              className="text-side"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>Transform Your Smile with Braces & Aligners in HSR Layout</h2>
              <p style={{ color: 'black' }}>
                Are you looking to achieve a confident, beautifully aligned smile? At <strong>Kosmix Dental Clinic</strong>, HSR Layout, we specialize in advanced orthodontic solutions tailored to your needs. Led by Dr. Shankhadeep Saha, a skilled Orthodontist and Smile Design Expert, our clinic offers a full range of braces and clear aligners to help you achieve the smile you’ve always wanted.
              </p>

              <p style={{ color: 'black' }}>
                Whether you need traditional metal braces, aesthetic ceramic braces, or discreet clear aligners like Invisalign, Dr. Shankhadeep Saha ensures a personalized treatment plan designed for maximum comfort and effectiveness.
              </p>

              <p style={{ color: 'black' }}>
                With a focus on precision, aesthetics, and long-term results, our orthodontic care is ideal for both teenagers and adults.
              </p>

              <p style={{ color: 'black' }}>
                <strong>Book your consultation today</strong> with Dr. Shankhadeep Saha and take the first step toward a straighter, more confident smile in HSR Layout, Bengaluru.
              </p>
            </div>
          </div>
        </section>


        <section className="crown-types-section">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Types of Orthodontic Treatments We Offer" />
          </div>

          <div className="crown-grid">
            {types.map((item, idx) => (
              <div className="crown-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 200}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="timeline-container" style={{ overflowX: 'hidden', padding: '0 1rem' }}>
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Step-by-Step Orthodontic Treatment Process" />
            <p className="text_first">
              Our streamlined process ensures comfort and precision at every stage:
            </p>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">🩺</div>
            <div className="timeline-content">
              <h3>Initial Consultation</h3>
              <p>Meet our orthodontist to discuss your dental concerns. We conduct a clinical exam and take a panoramic X-ray or digital scan of your teeth.</p>
            </div>
            <div className="timeline-icon">1</div>
          </div>

          <div className="timeline-step" data-aos="fade-left">
            <div className="timeline-icon">📊</div>
            <div className="timeline-content">
              <h3>Treatment Planning</h3>
              <p>We create a custom orthodontic plan using digital models and simulations to show your expected results before we start.</p>
            </div>
            <div className="timeline-icon">2</div>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">🦷</div>
            <div className="timeline-content">
              <h3>Appliance Placement</h3>
              <p>If you choose braces, brackets and wires are fixed to your teeth. If you opt for aligners, we deliver a series of custom trays to be worn daily.</p>
            </div>
            <div className="timeline-icon">3</div>
          </div>

          <div className="timeline-step" data-aos="fade-left">
            <div className="timeline-icon">📅</div>
            <div className="timeline-content">
              <h3>Regular Monitoring</h3>
              <p>We schedule monthly check-ups for braces or every 6–8 weeks for aligners to track progress and make adjustments if needed.</p>
            </div>
            <div className="timeline-icon">4</div>
          </div>

          <div className="timeline-step" data-aos="fade-right">
            <div className="timeline-icon">🛡️</div>
            <div className="timeline-content">
              <h3>Retention Phase</h3>
              <p>After your treatment ends, we provide a retainer to maintain your new smile and prevent relapse.</p>
            </div>
            <div className="timeline-icon">5</div>
          </div>

        </section>


        <section className="advantages-section">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Benefits of Choosing Kosmix Dental Clinic" />
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
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="braces-pricing" data-aos="fade-up">
          <div className="braces-pricing__content">
            <div className="content" data-aos="fade-up">
              <SectionTitle title="Cost of Braces & Aligners in Bengaluru" />
              <p1>
                Kosmix Dental Clinic offers affordable orthodontic solutions with zero-cost EMI options available.
              </p1>
              <p1>
                Final costs may vary depending on the complexity of your case. We offer free initial consultations to provide a personalized quote.
              </p1>
            </div>

            <div className="braces-pricing__cards">
              <div className="braces-card">
                <div className="braces-card__tag">Metal Braces</div>
                <h3 className="braces-card__price">₹25,000 – ₹45,000</h3>
                <p className="braces-card__desc">Budget-friendly, highly effective</p>
                <ul className="braces-card__details">
                  <li>● Strong and durable</li>
                  <li>● Ideal for complex corrections</li>
                  <li>● Popular among teens</li>
                </ul>
              </div>

              <div className="braces-card">
                <div className="braces-card__tag">Ceramic Braces</div>
                <h3 className="braces-card__price">₹35,000 – ₹60,000</h3>
                <p className="braces-card__desc">Aesthetic alternative to metal</p>
                <ul className="braces-card__details">
                  <li>● Tooth-colored brackets</li>
                  <li>● Blend with natural teeth</li>
                  <li>● Suitable for adults & teens</li>
                </ul>
              </div>

              <div className="braces-card braces-card--premium">
                <div className="braces-card__tag braces-card__tag--premium">Clear Aligners</div>
                <h3 className="braces-card__price">₹60,000 – ₹1,50,000+</h3>
                <p className="braces-card__desc">Discreet, removable, custom-designed trays</p>
                <ul className="braces-card__details">
                  <li>● Virtually invisible</li>
                  <li>● Comfortable & removable</li>
                  <li>● Ideal for mild to moderate cases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        <section className="why-kosmix-timeline">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Why Choose Kosmix Dental Clinic for Your Braces & Aligners in HSR Layout, Bengaluru?" />

            <p1 className="text_first">
              Choosing the right dental clinic for best orthodontic treatment is crucial. Here's why patients across Bengaluru trust Kosmix Dental Clinic in HSR Layout:
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
          <p1 className="importance-footer" data-aos="fade-up" data-aos-delay="10">
            A straighter, healthier smile starts here. Whether you're considering metal braces, ceramic braces, or clear aligners in Bengaluru, Kosmix Dental Clinic in HSR Layout is your go-to destination for professional and affordable orthodontic care.
          </p1>

        </section>


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


export default BracesAndAligners;
