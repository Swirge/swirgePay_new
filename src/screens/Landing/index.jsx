import React from "react";
import AppHeader from "../../component/AppHeader";
import ContractAddress from "./ContractAddress";
import DexSwirge from "./DexSwirge";
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
      <DexSwirge />
    </div>
  );
};

export default LandingScreen;
