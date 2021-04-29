import React from 'react';
import './profile-card.scss';


const ProfileCard = ({ fullName, role, twitterUrl, imgUrl }) => {
    return (
        <div className='profile-card'>
            <div className="profile-card-img-container">
                <img src={imgUrl} alt="profile" className='profile-card-img'/>
            </div>
            <div className="profile-card-details">
                <div className="detail-text">
                    <p className='fullname'>{fullName}</p>
                    <p className='role'>{role}</p>
                </div>
                <div className="twitter-icon-conatiner">
                    <a target='_blank' rel='noreferrer' href={twitterUrl}>
                        <img className='twitter-icon' src="/assets/images/twitter_icon.png" alt="twitter handle"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
