import React from "react";
import SwirgeLogo from "../../assets/images/logo.png";
import PayLogo from "../../assets/images/PAY.png";
import Navigation from "../Navigation";
import { navData } from "./data";
import "./appHeader.scss";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

const AppHeader = () => {
  return (
    <div className="appHeader">
      <div className="logo">
        <img src={SwirgeLogo} alt="swirge" />
        <img src={PayLogo} alt="pay" />
      </div>

      <Navigation navList={navData} />

      {/* Mobile & Tablet */}
      <div className="mobileScreen">
        <MenuIcon />
      </div>
    </div>
  );
};

export default AppHeader;
