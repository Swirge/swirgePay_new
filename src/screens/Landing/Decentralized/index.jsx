import React from "react";
import ProfileCard from "../../../component/ProfileCard";
import "./decentralized.styles.scss";

const Decentralized = () => {
  return (
    <section className="decentralized-root">
      <section className="decentralized-social">
        <div className="image-wrap"></div>

        <div className="content">
          <h4 className="title">Decentralized Social Media</h4>
          <p className="lead">
            One decentralized application for social media, marketplace, and
            payments, all seamlessly integrated together, built on the
            blockchain.
          </p>

          <ProfileCard
            headerTitle="Keith Mali Chung"
            subtitle="Co-Founder & COO, Swirge."
            quote="“The world needs an equal financial opportunity to prosper and to
          flourish, Swirge is offering this opportunity for all...”"
          />
        </div>
      </section>

      <section className="decentralized-payment">
        <div className="image-wrap"></div>

        <div className="content">
          <h4 className="title">Decentralized Payment Platform</h4>
          <p className="lead">
            Swirge Pay is a decentralized payment platform that enables users to
            make fast, secure, and reliable transactions, and we make use of the
            ERC20 Ethereum Blockchain and BEP20 Binance Blockchain to facilitate
            cheap and fast transactions.
          </p>

          <ProfileCard
            headerTitle="Johnson Daniel Jonah"
            subtitle="Co-Founder & CEO, Swirge."
            quote="“Giving control back to people is a core mission in Swirge, as we decentralize the web through blockchain...”"
          />
        </div>
      </section>
    </section>
  );
};

export default Decentralized;
