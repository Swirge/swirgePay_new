import React from "react";
import AppHeader from "../../component/AppHeader";
import ContractAddress from "./ContractAddress";
import Decentralized from "./Decentralized";
import DexSwirge from "./DexSwirge";
import HeroSection from "./Hero";
import SwirgeFinance from "./SwirgeFinance";
import TeamPlayers from '../../sections/team-players';
import AboutUs from '../../sections/about-us';
import ContactUs from '../../sections/contact-us';

const LandingScreen = () => {
  return (
    <div>
      <AppHeader />
      <HeroSection />
      <ContractAddress />
      <div className="grey-spacer" />
      <SwirgeFinance />
      <DexSwirge />
      <Decentralized />
      <TeamPlayers />
    </div>
  );
};

export default LandingScreen;
