import React, { useState } from 'react';
import CtaButton from '../../component/cta-button/cta-button.component';
import { FaTwitter, FaTelegram, FaInbox, FaMedium, FaFont } from "react-icons/fa";
import { IconContext } from "react-icons";
import './contact-us.scss';


const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const isInComplete = (firstName === '' || lastName === '' || email === '' || phone === '' || message === '');
    return (
        <div className='contact-us' id="contact">
            <h1 className="title">Contact Us</h1>
            <div className="contact-us-content">
                <div className="contact-details">
                    <div className="swirge-mail">
                        <FaInbox />
                        <a target='_blank' rel='noreferrer' href='mailto:contact@swirgepay.com'>contact@swirgepay.com</a>
                    </div>
                    <p className="text">
                        As a small team we are unable to offer support in most cases but encourage 
                        anyone facing issues with their wallet, transaction, or Swirge | Pay related 
                        question to join our active community on telegram.
                    </p>

                    <div className="socials">

                        <a target='_blank' href='https://twitter.com/swirgenetwork'>
                        
                        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                            <FaTwitter />
                        </IconContext.Provider>
                        </a>
                        <a target='_blank' href='https://app.swirge.com/'>
                            <img className='contact_swirge' src="/assets/logo.jpg" alt="swirge"/>
                        </a>
                        <a target='_blank' href='https://t.me/swirgepay'>

                        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                            <FaTelegram />
                        </IconContext.Provider>
                        </a>
                        <a target='_blank' href='https://swirgenetwork.medium.com'>

                            <IconContext.Provider value={{ color: "blue", className: "global-class-name meduimIcon" }}>
                                <FaMedium />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="input-grid">
                            <label htmlFor="first-name">
                                <p>First Name</p>
                                <input 
                                    type="text" 
                                    name="first-name" 
                                    id="first-name" 
                                    onChange={({ target }) => setFirstName(target.value)}
                                    value={firstName}                                    
                                />
                            </label>
                            <label htmlFor="last-name">
                                <p>Last Name</p>
                                <input 
                                    type="text" 
                                    name="last-name" 
                                    id="last-name"
                                    onChange={({ target }) => setLastName(target.value)}
                                    value={lastName}                                    
                                />
                            </label>
                            <label htmlFor="phone">
                                <p>Phone</p>
                                <input 
                                    type="phone"
                                    name="phone" 
                                    id="phone"
                                    onChange={({ target }) => setPhone(target.value)}
                                    value={phone}                                    
                                />
                            </label>
                            <label htmlFor="email">
                                <p>E - mail</p>  
                                <input 
                                    type="email"
                                    name="email" 
                                    id="email"
                                    onChange={({ target }) => setEmail(target.value)}
                                    value={email}                                    
                                />
                            </label>
                        </div>
                        <label htmlFor="message">
                            <p>Message</p>
                            <textarea 
                                name="message" 
                                id="message"
                                onChange={({ target }) => setMessage(target.value)}
                                value={message}        
                            >
                            </textarea>
                        </label>
                        <CtaButton shape='rectangular' value='Send Message' type='submit' disabled={isInComplete}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
