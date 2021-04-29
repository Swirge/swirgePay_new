import React from 'react';
import CtaButton from '../../component/cta-button/cta-button.component';
import './about-us.scss';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h1 className='title'>About Us</h1>
            <div className="about-us-content">
                <div className="about-us-image">
                    {/* <img src="" alt=""/> */}
                </div>
                <div className="about-us-details">
                    <div className="our-mission">
                        <h1 className='title'>Our Mission</h1>
                        <p className="text">
                            To give users complete control over their account data, privacy, and finances through 
                            blockchain technology, and to empower users to participate in a financial marketplace 
                            that is open and accessible to all..
                        </p>
                    </div>
                    <div className="about-swirge">
                        <h1 className='title'>About Swirge</h1>
                        <p className="text">
                        We build decentralized applications on the Blockchain to completely decentralize the web, 
                        check out our Decentralized social media <a className='swirge-link' href='##'>Swirge</a>.
                        </p>
                    </div>
                    <div className="our-community">
                        <h1 className='title'>Our Community</h1>
                        <div className="community-buttons">
                            <CtaButton shape='oval' value='Twitter' url='#'/>
                            <CtaButton shape='oval' value='Telegram' url='#'/>
                            <CtaButton shape='oval' value='Swirge' url='#'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
