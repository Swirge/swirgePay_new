import React from "react";
import PropTypes from "prop-types";
import "./profileCard.styles.scss";

const ProfileCard = ({ headerTitle, subtitle, quote, avatar }) => {
  return (
    <div className="profile-card-root">
      <div className="profile-card-header">
        <div className="avatar">
          <img src={avatar} alt="profile_pics"/>
        </div>
        <div className="header-info">
          <p className="header-title">{headerTitle}</p>
          <p className="header-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="profile-card-content">
        <p className="quote">{quote}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default ProfileCard;
