import React, { useEffect } from "react";
import Button from "../../../component/Button";
import SwirgeLogo from "../../../assets/images/logo.png";
import { BsFillCaretDownFill as DownArrowIcon } from "react-icons/bs";
import "./contractAddress.styles.scss";
import { GetValues } from "./getValues";

const ContractAddress = () => {
  const {values, getElement} = GetValues()
  useEffect(()=>{
    getElement('coinmarketcap-currency-widget');
  })
  return (
    <section className="address-wrap">
      <div className="info-wrap">
        <div className="flex">
          <div className="rank">
            <p className="caption">Rank</p>
            <h3>{values && values.rank}</h3>
            <h6 className="ticker">
              <img src={SwirgeLogo} alt="swirge ticker" /> SWG
            </h6>
          </div>
          <div className="info-details">
            <aside>
              <p className="caption">Name</p>
              <h6 className="primaryText">Swirge (SWG)</h6>
            </aside>
            <aside>
              <p className="caption">Price</p>
              <div className="flex price">
                <h6 className="primaryText">
                {values && values.price} <span className="currency">USD</span>
                </h6>

                {/* <span className="priceAction failed">
                  <DownArrowIcon />
                  {values && values.percentage}
                </span> */}
              </div>
            </aside>
            <aside>
              <p className="caption">Market Cap</p>
              <h6 className="primaryText">
              {values && values.mCap} M <span className="currency">USD</span>
              </h6>
            </aside>
            <aside>
              <p className="caption">Volume</p>
              <h6 className="primaryText">
              {values && values.volume} K <span className="currency">USD</span>
              </h6>
            </aside>
          </div>
        </div>

        <div className="flex end">
          <small>Powered by CoinMarketCap</small>
        </div>
      </div>

<div style={{
  zIndex: 100000,
  background:'white',
  flexBasis:'50%',
  display: 'none',
}} className="coinmarketcap-currency-widget" data-currencyid="7467" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
      <div className="btn-wrap">
        <Button text="BSC Contract Address" click ={ e =>{
          window.location.href = 'https://www.bscscan.com/token/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb'
        }} />

        <Button text="ETH Contract Address" click ={ e =>{
          window.location.href = 'https://etherscan.io/token/0x92eF4FFBfe0Df030837b65d7FcCFE1ABd6549579'
        }} />
      </div>
    </section>
  );
};

export default ContractAddress;
