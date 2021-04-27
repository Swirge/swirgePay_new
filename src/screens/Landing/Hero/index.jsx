import React from "react";
import { FaPlay } from "react-icons/fa";
import ChartImage from "../../../assets/images/amico.png";
import AppleStoreBadge from "../../../assets/images/apple-store-badge.png";
import GooglePlayBadge from "../../../assets/images/google-play-badge.png";
import Button from "../../../component/Button";
import "./hero.styles.scss";

const HeroSection = () => {
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
            <Button text="Claim Swirge" />
            <Button text="White-Paper" />
            <Button text="Swirge" />
          </div>
        </div>

        <div className="store-downloads">
          <img src={GooglePlayBadge} alt="download from google play store" />
          <img src={AppleStoreBadge} alt="download from apple store" />
        </div>

        <div className="intro-video">
          <div className="btn-rounded play">
            <FaPlay />
          </div>

          <p>Intro Video</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
