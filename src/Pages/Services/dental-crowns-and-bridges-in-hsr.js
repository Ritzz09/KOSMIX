import React from "react";

import "./Service_pages.scss";
import img from "./services/crowns&bridges.jpeg";
import dentalImage from "./services/dental.png";
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineStarPurple500, MdOutlineHealthAndSafety } from "react-icons/md";
import { GiGoldBar } from "react-icons/gi";
import { FaTooth, FaRegSmileBeam } from "react-icons/fa";
import { FaMicroscope, FaSmile, FaThumbsUp, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CrownAndBridges = () => {

  const types = [
    {
      title: "Porcelain-Fused-to-Metal (PFM)",
      icon: <MdOutlineStarPurple500 />,
      desc: "These crowns offer a good balance of strength and aesthetics. A metal base provides durability, while a porcelain layer is fused over it to match your natural tooth color. Ideal for both front and back teeth, they are a time-tested option.",
    },
    {
      title: "All-Ceramic/All-Porcelain",
      icon: <FaTooth />,
      desc: "Known for their exceptional aesthetic appeal, these crowns are entirely made of ceramic or porcelain. They are highly biocompatible and provide the most natural-looking results, making them ideal for front teeth where aesthetics are paramount.",
    },
    {
      title: "Zirconia Crowns",
      icon: <MdOutlineHealthAndSafety />,
      desc: "Extremely strong, biocompatible, and natural-looking, Zirconia crowns have gained immense popularity. They are highly resistant to chipping and cracking, making them suitable for both front and back teeth, especially for patients who clench or grind.",
    },
    {
      title: "Metal Crowns (Gold/Stainless Steel)",
      icon: <GiGoldBar />,
      desc: "While less aesthetic, metal crowns (including gold alloy and stainless steel) are exceptionally durable and affordable. They are often used for back teeth where biting forces are significant and visibility is less of a concern. Stainless steel crowns are frequently used as temporary crowns for children.",
    },
  ];



  const advantages = [
    {
      title: "Restores appearance and natural tooth shape",
      description: "Provides a seamless, natural-looking solution for damaged or missing teeth.",
    },
    {
      title: "Enables proper chewing and speech",
      description: "Improves oral function, allowing you to enjoy your favorite foods and speak clearly.",
    },
    {
      title: "Prevents shifting of adjacent teeth",
      description: "Maintains the integrity of your dental arch and bite.",
    },
    {
      title: "Long-lasting with proper care",
      description: "With good oral hygiene and regular dental check-ups, crowns and bridges can last for many years, often a decade or more.",
    },
    {
      title: "Seamlessly matches natural teeth",
      description: "Modern materials and techniques ensure your restoration blends in perfectly with your existing smile.",
    },
    {
      title: "Improves confidence and smile aesthetics",
      description: "A complete and healthy smile can significantly boost self-esteem.",
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


  const benefits = [
    {
      category: "Aesthetics",
      benefit: "Restores Natural Appearance",
      description:
        "Crowns and bridges are custom-made to match the color, shape, and size of your natural teeth.",
    },
    {
      category: "Aesthetics",
      benefit: "Boosts Confidence and Smile Aesthetics",
      description:
        "A complete, healthy-looking smile significantly improves self-esteem and overall appearance.",
    },
    {
      category: "Functionality",
      benefit: "Enables Proper Chewing and Speech",
      description:
        "Restores your ability to bite, chew effectively, and speak clearly without hindrance.",
    },
    {
      category: "Functionality",
      benefit: "Prevents Shifting of Adjacent Teeth",
      description:
        "Fills gaps, preventing surrounding teeth from drifting out of alignment and causing bite issues.",
    },
    {
      category: "Durability & Longevity",
      benefit: "Long-lasting Solution with Proper Care",
      description:
        "Designed to be highly durable; can last for 10-15 years or more with good oral hygiene and maintenance.",
    },
    {
      category: "Oral Health Protection",
      benefit: "Protects Weak/Damaged Teeth",
      description:
        "Crowns reinforce compromised teeth, preventing further damage or fracture.",
    },
    {
      category: "Oral Health Protection",
      benefit: "Maintains Jawbone and Facial Structure (Bridges)",
      description:
        "Helps preserve the integrity of your jaw and facial contours by preventing bone loss in the area.",
    },
  ];

  const reasons = [


    {
      icon: <FaTooth />,
      title: 'Crown and Bridge Specialists in Bengaluru',
      description: 'Our team comprises highly qualified and experienced specialists dedicated to crowns and bridges.'
    },
    {
      icon: <FaMicroscope />,
      title: 'State-of-the-art Equipment and Digital Precision',
      description: 'We invest in the latest dental technology for accurate diagnoses, precise treatment, and superior outcomes.'
    },
    {
      icon: <FaSmile />,
      title: 'Natural-looking, Perfectly Matched Restorations',
      description: 'Our commitment to aesthetic excellence ensures your new smile is indistinguishable from natural teeth.'
    },
    {
      icon: <FaThumbsUp />,
      title: 'High Patient Satisfaction and Ratings',
      description: 'Our numerous positive reviews speak to our dedication to patient care and successful results.'
    },
    {
      icon: <FaStar />,
      title: 'Recognized for Restorative and Smile-Enhancing Care',
      description: 'We are proud to be a trusted choice for complete smile transformations.'
    }
  ];



  return (
    <>

      <div className="service1-section">

        <div className="hero">
          <h1 className="service1-title-text" data-aos="fade-down" data-aos-delay="200" style={{ fontFamily: 'initial' }}>
            Dental Crowns and Bridges Treatment in HSR Layout
          </h1>

          <div className="hero-content">
            <div className="hero-image" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
              <img src={img} alt="Dental Crowns and Bridges" />
            </div>

            <div className="hero-text" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
              <p>
                A beautiful smile is a reflection of confidence, health, and well-being. At
                Kosmix Dental Clinic, Dr. Shankhadeep Saha and Dr. Sophia Saud offer
                personalized care to help you achieve just that. With advanced dental crowns
                and bridges treatment in HSR Layout, we provide durable and aesthetic
                solutions for weakened, damaged, or missing teeth.
              </p>
              <p>
                Our focus is not only on restoring your teeth but also on enhancing your quality of life through functional and natural-looking dental solutions. By combining clinical expertise with state-of-the-art technology, we ensure that every crown and bridge treatment delivers both comfort and long-lasting results — helping you eat, speak, and smile with renewed confidence.
              </p>
              <p>
                Whether you're recovering from previous dental work or looking to restore
                function and appearance, our approach ensures long-lasting results with a
                natural finish.
              </p>
            </div>
          </div>
        </div>


        <div className="content" data-aos="fade-up" data-aos-delay="300" >
          <SectionTitle title="What Are Crowns and Bridges?" />
          <div className="text_first" >
            <p1>
              Dental crowns and bridges are prosthetic devices meticulously crafted to restore or
              replace damaged or missing teeth, respectively. They are fixed solutions, meaning
              they are cemented onto existing teeth or implants and can only be removed by a
              dentist.
            </p1>
          </div>
        </div>
        <div className="compare-section">
          <div className="compare-card crown-card" data-aos="fade-up" data-aos-delay="600">
            <h3>Dental Crowns</h3>
            <h6>
              A dental crown, often referred to as a "cap," is a custom-made covering placed over
              a damaged or weakened tooth. Its purpose is to restore the tooth's original shape,
              size, strength, and improve its appearance.

            </h6>
            < br />
            <h5>
              When are Dental Crowns Recommended?
            </h5>
            < br />

            <ul>
              <li>After root canal treatment to protect the brittle tooth.</li>
              <li>To cover and support a tooth with a large filling when there isn't enough tooth structure remaining.</li>
              <li>To restore a broken or severely worn-down tooth.</li>
              <li>To protect a weak tooth from fracturing.</li>
              <li>To cover a dental implant.</li>
              <li>To improve the aesthetic appearance of a discolored or misshapen tooth.</li>

            </ul>
          </div>

          <div className="compare-card bridge-card" data-aos="fade-up" data-aos-delay="600">
            <h3>Dental Bridges</h3>
            <h6>
              A dental bridge is a restorative solution used to replace one or more missing teeth.
              It "bridges" the gap created by missing teeth by anchoring artificial teeth (pontics)
              to adjacent natural teeth or dental implants (abutments).


            </h6>
            < br />
            <h5>
              Why are Dental Bridges Important?
            </h5>
            < br />
            <ul>

              <li><strong>Prevents Shifting:</strong> Without a bridge, adjacent teeth can drift into the empty
                space, leading to bite problems and discomfort.</li>
              <li><strong>Restores Functionality:</strong> Enables proper chewing and speaking.</li>
              <li><strong>Maintains Facial Structure:</strong> Missing teeth can lead to changes in facial
                structure over time, which bridges help prevent.</li>
              <li><strong>Enhances Aesthetics:</strong> Restores the natural appearance of your smile.</li>

            </ul>
          </div>
        </div>

        <section className="importance-section">
          <div className="content">
            <h2 className="section-title" data-aos="fade-up">The Importance of Addressing Missing or Damaged Teeth</h2>
            <p1 className="text_first" data-aos="fade-up" data-aos-delay="100">
              Ignoring damaged or missing teeth can lead to a cascade of oral health issues. Beyond the aesthetic concerns, <br /> you might experience:
            </p1>
          </div>

          <div className="importance-cards-container">
            {[
              {
                title: "● Difficulty Chewing and Speaking",
                desc: "Compromised ability to bite and enunciate clearly.",
              },
              {
                title: "● Misalignment of Remaining Teeth",
                desc: "Healthy teeth can shift into the empty spaces, leading to bite irregularities and potential gum disease.",
              },
              {
                title: "● Jawbone Deterioration",
                desc: "The jawbone can resorb (shrink) over time due to lack of stimulation from missing tooth roots.",
              },
              {
                title: "● Increased Risk of Tooth Decay",
                desc: "Misaligned teeth can be harder to clean, increasing the risk of cavities.",
              },
              {
                title: "● Temporomandibular Joint (TMJ) Disorders",
                desc: "Uneven biting forces can strain the jaw joint.",
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
            Addressing these issues promptly with solutions like crowns and bridges can significantly improve your oral health and overall quality of life.
          </p>
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
              <h2>Why Choose Us for Crowns and Bridges in HSR Layout?</h2>
              <p style={{ color: 'black' }}>
                At <strong>Kosmix Dental Clinic</strong>, we combine advanced technology, artistic precision, and personalized care to ensure your crowns and bridges look and feel natural.
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
                Our expert team ensures accurate diagnosis, minimally invasive treatment, and long-lasting results customized to your needs.
              </p>

              <p style={{ color: 'black' }}>
                We follow a collaborative approach to ensure each patient receives comprehensive, specialist-driven care.
              </p>

              <p style={{ color: 'black' }}>
                We're a <strong>top-rated clinic</strong> for crowns and bridges in HSR Layout, trusted for our aesthetic results and high patient satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section className="crown-types-section">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Types of Dental Crowns" />

            <p1 className="text_first">
              Choosing the right crown material is crucial for both aesthetics and durability.
              Our dentists will guide you through the options based on your specific needs, bite,
              and aesthetic preferences.
            </p1>
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
    <SectionTitle title="Step-by-Step Crown & Bridge Procedure" />
    <p className="text_first">
      Our streamlined process ensures comfort and precision at every stage:
    </p>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">📋</div>
    <div className="timeline-content">
      <h3>Consultation & Diagnosis</h3>
      <p>Our specialists conduct a thorough clinical examination and utilize digital X-rays and 3D imaging (if necessary) to assess your oral health and determine the best course of action.</p>
    </div>
    <div className="timeline-icon">1</div>
  </div>

  <div className="timeline-step" data-aos="fade-left">
    <div className="timeline-icon">🦷</div>
    <div className="timeline-content">
      <h3>Tooth Preparation</h3>
      <p>Teeth are shaped to allow proper crown or bridge fitting. This involves removing a small amount of enamel to avoid bulkiness and ensure a natural look.</p>
    </div>
    <div className="timeline-icon">2</div>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">📸</div>
    <div className="timeline-content">
      <h3>Digital Impressions</h3>
      <p>We use advanced 3D scanning to capture precise models of your teeth, eliminating the need for uncomfortable molds and ensuring excellent bite alignment.</p>
    </div>
    <div className="timeline-icon">3</div>
  </div>

  <div className="timeline-step" data-aos="fade-left">
    <div className="timeline-icon">🛠️</div>
    <div className="timeline-content">
      <h3>Temporary Crown/Bridge</h3>
      <p>A temporary restoration is placed to protect your prepared teeth while the custom crown/bridge is being made in the lab.</p>
    </div>
    <div className="timeline-icon">4</div>
  </div>

  <div className="timeline-step" data-aos="fade-right">
    <div className="timeline-icon">😁</div>
    <div className="timeline-content">
      <h3>Final Crown/Bridge Placement</h3>
      <p>Once your crown/bridge is ready, we securely cement it in place, ensuring a proper fit, appearance, and function.</p>
    </div>
    <div className="timeline-icon">5</div>
  </div>

  <div className="timeline-step" data-aos="fade-left">
    <div className="timeline-icon">✅</div>
    <div className="timeline-content">
      <h3>Follow-Up Adjustments</h3>
      <p>We may make minor refinements to ensure long-term comfort, function, and aesthetics. Follow-ups are encouraged for continued success.</p>
    </div>
    <div className="timeline-icon">6</div>
  </div>
</section>


        <section className="advantages-section">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Key Advantages of Crowns and Bridges
" />

            <p1 className="text_first">
              The benefits of investing in dental crowns and bridges extend beyond just a
              beautiful smile:
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
            <SectionTitle title="Potential Considerations (Disadvantages) of Crowns
and Bridges" />

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
                <SectionTitle title="Dental Crowns and Bridges Cost in HSR Layout, Bengaluru" />

                <p >
                  Cost of Dental Crowns and Bridges in HSR Layout can vary depending on
                  several factors, but at Kosmix Dental Clinic, we’re committed to offering
                  high-quality yet affordable care. We believe exceptional dental treatment should be
                  accessible to all. Whether you're searching for teeth crown and bridges in HSR
                  Layout or exploring options for a dental crown near me, we provide expert guidance
                  with transparent pricing.
                </p>

                <p >
                  Final costs depend on the material chosen, the number of units required, the
                  complexity of your specific case, and any additional procedures (like root canals)
                  that may be necessary prior to crown or bridge placement. During your
                  consultation, we will provide a transparent and detailed cost estimate.
                </p>
              </div>


            </div>

            <div className="price-cards">
              <div className="price-card">
                <div className="tag">Crowns</div>
                <h3 className="price">₹4,000 - ₹15,000+</h3>
                <p className="desc">
                  Based on material: PFM to Zirconia/All-Ceramic
                </p>
                <ul className="details">
                  <li>● Natural Look & Feel</li>
                  <li>● Long-lasting & Durable</li>
                  <li>● Minimal Discomfort</li>
                </ul>

              </div>

              <div className="price-card premium">
                <div className="tag premium-tag">Bridges</div>
                <h3 className="price">From ₹6,000 / unit</h3>
                <p className="desc">
                  Cost per pontic and abutment tooth
                </p>
                <ul className="details">
                  <li>● Replace Multiple Teeth</li>
                  <li>● Restores Function & Aesthetics</li>
                  <li>● Prevents Shifting of Adjacent Teeth</li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        <section className="why-kosmix-timeline">
          <div className="content" data-aos="fade-up">
            <SectionTitle title="Why Kosmix Is One of the Best Choice in Bengaluru for
Crowns and Bridges Treatment" />

            <p1 className="text_first">
              Our reputation as a top choice for crowns and bridges treatment in Bengaluru is
              built on a foundation of expertise, technology, and patient satisfaction:

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


        <section className="cta-section">
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

const ListTitle = ({ title }) => <p className="list-title">{title}</p>;

const BulletList = ({ items }) => (
  <ul className="bullet-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const OrderedList = ({ items }) => (
  <ol className="ordered-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ol>
);

export default CrownAndBridges;
