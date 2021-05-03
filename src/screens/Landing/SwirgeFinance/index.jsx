import React from "react";
import ActivityIcon from "../../../assets/images/activity.png";
import GraphImage from "../../../assets/images/graph.png";
import Blurb from "../../../component/Blurb";
import { blurbList } from "./swirgeFinance.data";
import Button from "../../../component/Button";
import "./swirgeFinance.styles.scss";

const SwirgeFinance = () => {
  return (
    <section className="flex swirgeFinance-wrap">
      <h3 className="title">Swirge Finance</h3>

      <div className="container">
        <div className="blurb-wrap">
          <Blurb blurbList={blurbList} />
        </div>

        <div className="details">
          <div className="top-layer">
            <div className="icon-wrap">
              <img src={ActivityIcon} alt="bulk activity" />
            </div>
            <h4 className="title">What is Swirge Finance?</h4>
          </div>

          <p className="text">
            Swirge Finance is a Swirge subsidiary focused on building
            decentralized financial products on the blockchain like a
            Multi-chain yield optimizer and staking platform operating on
            Binance Smart Chain and ( Avalanche and Huobi Eco Chain ).
          </p>

          <div className="graph-view">
            <img src={GraphImage} alt="transaction graph" />
          </div>

          <Button text="Learn more" click = {e => {window.location.href = 'https://docs.swirge.com/'}} />
        </div>
      </div>
    </section>
  );
};

export default SwirgeFinance;
