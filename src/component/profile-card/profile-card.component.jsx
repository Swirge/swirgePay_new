import React from 'react';
import { Link } from 'react-router-dom';
import './profile-card.scss';


const ProfileCard = ({ fullName, role }) => {
    return (
        <div className='profile-card'>
            <div className="profile-card-img-container">
                {/* <img src="" alt="profile" className='profile-card-img'/> */}
            </div>
            <div className="profile-card-details">
                <div className="detail-text">
                    <p className='fullname'>{fullName}</p>
                    <p className='role'>{role}</p>
                </div>
                <div className="twitter-icon-conatiner">
                    <Link to='#'>
                        <img className='twitter-icon' src="/assets/images/twitter.svg" alt="twitter handle"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
