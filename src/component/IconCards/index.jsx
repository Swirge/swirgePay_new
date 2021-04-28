import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./iconCards.styles.scss";

const IconCards = ({ dataList }) => {
  return dataList.map((item, idx) => (
    <div className="icon-card" key={`${idx}-${item.title}`}>
      <div className="icon">
        <img src={item.icon} alt={item.title} />
      </div>

      <div className="card-content">
        <h6 className="title">{item.title}</h6>

        <p className="text">{item.text}</p>

        <Link to={item.link}>{item.btnText}</Link>
      </div>
    </div>
  ));
};

IconCards.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      btnText: PropTypes.string,
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default IconCards;
