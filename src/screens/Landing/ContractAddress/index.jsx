import React from "react";
import Button from "../../../component/Button";
import SwirgeLogo from "../../../assets/images/logo.png";
import { BsFillCaretDownFill as DownArrowIcon } from "react-icons/bs";
import "./contractAddress.styles.scss";

const ContractAddress = () => {
  return (
    <section className="address-wrap">
      <div className="info-wrap">
        <div className="flex">
          <div className="rank">
            <p className="caption">Rank</p>
            <h3>1221</h3>
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
                  0.425562 <span className="currency">USD</span>
                </h6>

                <span className="priceAction failed">
                  <DownArrowIcon />
                  (-12.06%)
                </span>
              </div>
            </aside>
            <aside>
              <p className="caption">Market Cap</p>
              <h6 className="primaryText">
                $5.10 M <span className="currency">USD</span>
              </h6>
            </aside>
            <aside>
              <p className="caption">Volume</p>
              <h6 className="primaryText">
                $692.89 K <span className="currency">USD</span>
              </h6>
            </aside>
          </div>
        </div>

        <div className="flex end">
          <small>Powered by CoinMarketCap</small>
        </div>
      </div>

      <div className="btn-wrap">
        <Button text="BSC Contract Address" />

        <Button text="ETH Contract Address" />
      </div>
    </section>
  );
};

export default ContractAddress;
