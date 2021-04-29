import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = ({ navList }) => {
  return (
    <ul>
      {navList.map((item, idx) => (
        <li key={`${idx}-${item.name}`}>
          <NavLink to={item.to} activeClassName="selected">
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;
