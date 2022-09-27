import React from "react";
import bgRum from "../../assets/bg-rum.jpeg";
import logoIcon from "../../assets/smIcon.png";
import "./MenuOptions.scss";
const MenuOptions = () => {
  return (
    <div className="app-menuoptions">
      <img src={bgRum} alt="" />
      <div className="app-menuoptions-overlay flex-center">
        <img src={logoIcon} alt="" className="logoILeft" />
        <ul className="app-menuoptions-list">
          <li className="headtext-cormorant">Bar Menu</li>
          <li className="headtext-cormorant">Food Menu</li>
          <li className="headtext-cormorant">Deserts Menu</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuOptions;
