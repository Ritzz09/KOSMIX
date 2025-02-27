import React from "react";
import "./Equipment.scss";

import one from "../../assets/Equipments/equipment1.jpg";
import two from "../../assets/Equipments/equipment2.jpg";
import three from "../../assets/Equipments/equipment3.jpg";
import four from "../../assets/Equipments/equipment4.jpg";

const Equipment = () => {
  const equipmentData = [
    { src: one, name: "Dental Scanner" },
    { src: two, name: "Digital X Ray" },
    { src: three, name: "Dental Loupes" },
    { src: four, name: "CBCT Machine" },
  ];

  return (
    <section id="equipments" className="EquipmentSection">
      <div className="content-wrapper">
        <div className="text-content">
          <h2>Cutting-Edge Technology</h2>
          <p>Modern Tools and Techniques for Pain-Free, Precise Treatments</p>
        </div>
        <div className="cards-container">
          {equipmentData.map((item, index) => (
            <div key={index} className="equipment-card">
              <img
                src={item.src}
                alt={item.name}
                className="equipment-image"
              />
              <h3 className="equipment-name">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
