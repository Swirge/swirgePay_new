import React from "react";
import AppHeader from "../../component/AppHeader";
import ContractAddress from "./ContractAddress";
import HeroSection from "./Hero";
import SwirgeFinance from "./SwirgeFinance";

const LandingScreen = () => {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <ContractAddress />
      <div className="grey-spacer" />
      <SwirgeFinance />
    </div>
  );
};

export default LandingScreen;
