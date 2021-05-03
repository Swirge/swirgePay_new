import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ChartImage from "../../../assets/images/amico.png";
import AppleStoreBadge from "../../../assets/images/apple-store-badge.png";
import GooglePlayBadge from "../../../assets/images/google-play-badge.png";
import Button from "../../../component/Button";
import Modal from "../Modal/modal";
import "./hero.styles.scss";

const HeroSection = () => {
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState(!modalState)
  }
  return (
    <section className="hero-wrap">
      <div className="imageWrap">
        <img src={ChartImage} alt="chart" />
      </div>

      <div className="cta">
        <div className="cta-info">
          <h3>Decentralizing Finance</h3>
          <p className="lead">
            Swirge | Pay is a fully decentralized payment platform built on the
            blockchain.
          </p>

          <div className="cta-btns">
            <Button text="Claim Swirge" click = {e => {window.location.href = 'https://sale.swirgepay.com/'}}  />
            <Button text="White-Paper" click = {e => {window.location.href = 'https://swirgepay.com/docs/not-so-whitepaper.pdf'}} />
            <Button text="Swirge" click = {e => {window.location.href = 'https://app.swirge.com'}} />
          </div>
        </div>

        <div className="store-downloads">
          <img src={GooglePlayBadge} alt="download from google play store" onClick= {e => {
            window.location.href = "https://play.google.com/store/apps/details?id=com.swirgewave.app"
          }} />
          <img src={AppleStoreBadge} alt="download from apple store" onClick= {e => {
            window.location.href = "https://testflight.apple.com/join/8Wdqk2uH" }} />
        </div>

        <div onClick={handleModal} className="intro-video">
          <div className="btn-rounded play">
            <FaPlay />
          </div>

          <p>Intro Video</p>
        </div>
      </div>
      { modalState && <Modal handleModal = {handleModal} />}
    </section>
  );
};

export default HeroSection;
