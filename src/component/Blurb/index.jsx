import React from "react";
import "./blurb.styles.scss";

const Blurb = ({ blurbList }) => {
  return blurbList.map((item, idx) => (
    <div className="blurb" key={`${idx}-${item.text}`}>
      <div className="blurb-image">
        <img src={item.icon} alt={item.text} />
      </div>

      <p className="blurb-text">{item.text}</p>
    </div>
  ));
};

export default Blurb;
