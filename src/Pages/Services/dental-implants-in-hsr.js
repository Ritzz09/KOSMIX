import React from "react";
import "./Service_pages.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import img from "./services/dental_implants.jpg";
import dentalImage from "./services/dental.png";

const DentalImplants = () => {


  const advantages = [
  {
    title: "Single Tooth Implants",
    description: "Restore one missing tooth with a strong and natural-looking solution.",
  },
  {
    title: "Multiple Implants",
    description: "Replace several missing teeth with individual implants or bridges anchored by implants.",
  },
  {
    title: "Full Mouth Rehabilitation (All-on-4 / All-on-6)",
    description: "For patients who’ve lost most or all teeth, we offer fixed full-arch restorations with as few as four or six implants.",
  },
  {
    title: "Implant-Supported Dentures",
    description: "A hybrid approach for those seeking the stability of implants with the coverage of dentures.",
  },
  {
    title: "Immediate Load Implants",
    description: "In eligible cases, temporary teeth are placed on the same day as surgery, so you walk out smiling.",
  },
  {
    title: "Zirconia Crowns for Implants",
    description: "We also offer high-quality zirconia prosthetics for long-lasting aesthetics and durability.",
  },
];


  return (
    <div className="service1-section">
      <Helmet>
        <title>Dental Implants in HSR Layout | Implantologist Near Me - Kosmix</title>
        <meta
          name="description"
          content="Discover expert dental implants in HSR Layout at Kosmix Dental Clinic, where Dr. Shankhadeep and Dr. Sophia deliver top-tier implant care for lasting, natural-looking smiles."
        />
        <link
          rel="canonical"
          href="https://www.kosmixdentalclinic.com/services/dental-implants-in-hsr-layout"
        />
      </Helmet>

      <div className="hero">
        <h1 className="service1-title-text" data-aos="fade-down" data-aos-delay="200" style={{ fontFamily: 'initial' }}>
          Dental Implants in HSR Layout
        </h1>

        <div className="hero-content">
          <div className="hero-image" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
            <img src={img} alt="Dental Crowns and Bridges" />
          </div>

          <div className="hero-text" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
            <p>
              Missing teeth can have a profound effect on your appearance, speech, and ability to
              enjoy your favorite foods. At Kosmix Dental Clinic, we offer advanced dental
              implants in HSR Layout, designed to restore not just your smile but also your
              self-confidence.
            </p>
            <p>Our dental implant procedures are tailored to each individual, ensuring a natural look and secure fit. Using biocompatible materials and minimally invasive techniques, we aim to provide durable and aesthetically pleasing results with minimal discomfort and downtime.</p>
            <p>
              Under the expert care of Dr. Shankhadeep Saha and Dr. Sophia
              Saud, we provide personalized treatments using the latest dental technologies. If
              you're searching for dental implants near me, your search ends here—with
              skilled professionals who prioritize your comfort, functionality, and long-term dental
              health.
            </p>

          </div>
        </div>
      </div>

      <section className="importance-section">
        <div className="content">
          <h2 className="section-title" data-aos="fade-up">Why Choose Dental Implants?</h2>
          <p1 className="text_first" data-aos="fade-up" data-aos-delay="100">
            Dental implants are a long-term, natural-looking solution for missing teeth. Unlike
            removable dentures or conventional bridges, implants fuse directly with your
            jawbone, offering unmatched stability and functionality.
          </p1>
        </div>

        <div className="importance-cards-container">
          {[
            {
              title: "● Natural Aesthetic and Performance",
              desc: "Implants look and feel just like real teeth, restoring full chewing ability and confidence in your smile.",
            },
            {
              title: "● Preservation of Jawbone & Facial Structure",
              desc: "They prevent bone loss and sagging, which can occur with missing teeth.",
            },
            {
              title: "● No Damage to Adjacent Teeth",
              desc: "Implants are placed independently and do not rely on nearby teeth for support.",
            },
            {
              title: "● Long-Lasting Results",
              desc: "With proper care, dental implants can last a lifetime, making them a cost-effective solution in the long run.",
            },
            {
              title: "● Comfort and Convenience",
              desc: "Say goodbye to the slipping, discomfort, and maintenance of removable dentures.",
            },
          ].map((item, index) => (
            <div className="importance-card" data-aos="fade-up" data-aos-delay={150 + index * 100} key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
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
              <img src={dentalImage} alt="Dental Care" />
            </div>

            <div
              className="text-side"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>Meet Our Dental Implant Experts in HSR Layout</h2>
              <p style={{ color: 'black' }}>
                At <strong>Kosmix Dental Clinic</strong>,  your implant journey is guided by experienced hands. Dr.
Shankhadeep Saha, known for his precision and commitment to patient
satisfaction, and Dr. Sophia Saud, a seasoned aesthetic and restorative specialist,
bring a collaborative approach to every implant case. Together, they ensure every
patient receives the most effective and customized treatment.
              </p>

              <div className="doctor-info" data-aos="fade-up" data-aos-delay="400">
                <h3>Meet Our Experts</h3>
                <div className="doctor">
                  <span className="emoji">🦷</span>
                  <div>
                    <h4>Dr. Shankhadeep Saha</h4>
                    <p>MDS in Periodontics & Implantology</p>
                  </div>
                </div>
                <div className="doctor">
                  <span className="emoji">🦷</span>
                  <div>
                    <h4>Dr. Sophia Saud</h4>
                    <p>MDS in Conservative Dentistry & Endodontics</p>
                  </div>
                </div>
              </div>

              <p style={{ color: 'black' }}>
We are proud to be recognized as one of the most trusted centers for Dental
Implants in HSR Layout, offering an ethical, transparent, and results-driven
approach to smile restoration.              </p>

              
            </div>
          </div>
        </section>

       <section className="timeline-container" style={{ overflowX: 'hidden', padding: '0 1rem' }}>
  <div className="content" data-aos="fade-up">
    <SectionTitle title="The Dental Implant Process at Kosmix Dental Clinic" />
    <p className="text_first">
      We believe in a comprehensive, step-by-step approach for your comfort and optimal
results :
    </p>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">📋</div>
    <div className="timeline-content">
      <h3>Consultation & Planning</h3>
      <p>We begin with a detailed consultation including
X-rays and 3D scans to assess bone health and develop a personalized
treatment plan.</p>
    </div>
    <div className="timeline-icon">1</div>
  </div>

  <div className="timeline-step" data-aos="fade-left">
    <div className="timeline-icon">🦷</div>
    <div className="timeline-content">
      <h3>Implant Placement</h3>
      <p>A titanium post is surgically placed into the jawbone.
This is a minimally invasive procedure, performed with precision and care.</p>
    </div>
    <div className="timeline-icon">2</div>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">❤️</div>
    <div className="timeline-content">
      <h3>Healing (Osseointegration)</h3>
      <p>Over the next few months, the implant bonds
with the jawbone, forming a solid base.</p>
    </div>
    <div className="timeline-icon">3</div>
  </div>

  <div className="timeline-step" data-aos="fade-left">
    <div className="timeline-icon">🛠️</div>
    <div className="timeline-content">
      <h3>Abutment Fixation</h3>
      <p>Once healed, a connector is placed on top of the
implant.</p>
    </div>
    <div className="timeline-icon">4</div>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">😁</div>
    <div className="timeline-content">
      <h3>Final Crown Placement</h3>
      <p>A custom-made crown that perfectly matches your
other teeth is placed, completing your new smile.</p>
    </div>
    <div className="timeline-icon">5</div>
  </div>
</section>


<section className="braces-pricing" data-aos="fade-up">
          <div className="braces-pricing__content">
            <div className="content" data-aos="fade-up">
              <SectionTitle title="Dental Implant Cost in HSR Layout – What to Expect" />
              <p1 className="text_first">
At Kosmix Dental Clinic, we believe in transparent, value-based pricing for all our
services. Dental implant costs may vary depending on the number of implants,
materials used, and any additional procedures like bone grafting.
              </p1>
              <p1 className="text_first">
                Final costs may vary depending on the complexity of your case. We offer free initial consultations to provide a personalized quote.
              </p1>
            </div>

            <div className="braces-pricing__cards">
  {[
    {
      tag: "Single Dental Implant",
      price: "₹25,000<br/>To<br/> ₹45,000",
    },
    {
      tag: "Implant with Crown (per tooth)",
      price: "₹35,000<br/>To<br/> ₹60,000",
    },
    {
      tag: "Full Mouth Implants (All-on-4)",
      price: "₹1,80,000<br/>To<br/>₹3,50,000+",
    },
    {
      tag: "Full Mouth Implants (All-on-6)",
      price: "₹2,50,000<br/>To<br/>₹4,50,000+",
    },
    {
      tag: "Implant-Supported Dentures",
      price: "₹60,000<br/>To<br/>₹1,20,000+",
    },
    {
      tag: "Bone Grafting (if required)",
      price: "₹5,000<br/>To<br/>₹15,000+",
    },
    {
      tag: "Zirconia Crown (per unit)",
      price: "₹10,000<br/>To<br/>₹18,000+",
    },
  ].map((item, index) => (
    <div
      className={`braces-card ${index >= 2 ? "braces-card--premium" : ""}`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      key={index}
    >
      <div
        className={`braces-card__tag ${
          index >= 2 ? "braces-card__tag--premium" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: item.tag }}
      />
      <h3
        className="braces-card__price"
        dangerouslySetInnerHTML={{ __html: item.price }}
      />
    </div>
  ))}
</div>

          </div>
        </section>

        <section className="advantages-section">
                  <div className="content" data-aos="fade-up">
                    <SectionTitle title="Our Implant Options at Kosmix Dental Clinic" />
        
                    <p1 className="text_first">
                      To cater to every patient's unique dental needs, we offer a full suite of implant
solutions:

                    </p1>
                  </div>
                  <div className="advantages-grid">
                    {advantages.map((item, index) => (
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


        <section className="content" data-aos='fade-up'>
        <SectionTitle title="Bone Grafting for Successful Implants" />
        <p className="text_first">
In cases where patients have insufficient bone density, <strong>bone grafting</strong> may be
recommended before implant placement. Our team is skilled in various grafting
techniques that enable patients with bone loss to become eligible candidates for
implants, ensuring a solid and reliable foundation.        </p>
      </section>


      <section className="cta-section" data-aos='zoom-in'>
        <div className="cta-content">
          <h2>
            Schedule Your Appointment <span>Today!</span>
          </h2>
          <p>
            Discover the best dental implant treatment in HSR Layout with our top-rated care and cutting-edge techniques.
          </p>
          <div className="cta-buttons">
            <Link to="/#appointment">
              <button className="btn-primary">Book Appointment</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionTitle = ({ title }) => <h2 className="section-title">{title}</h2>;

export default DentalImplants;
