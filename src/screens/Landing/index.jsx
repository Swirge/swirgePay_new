import React from "react";
import AppHeader from "../../component/AppHeader";
import ContractAddress from "./ContractAddress";
import HeroSection from "./Hero";

const LandingScreen = () => {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <ContractAddress />
      <div className="grey-spacer" />
    </div>
  );
};

export default LandingScreen;
