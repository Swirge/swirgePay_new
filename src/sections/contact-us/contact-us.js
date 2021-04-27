import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaButton from '../../component/cta-button/cta-button.component';
import './contact-us.scss';

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const isInComplete = (firstName === '' || lastName === '' || email === '' || phone === '' || message === '');

    return (
        <div className='contact-us'>
            <h1 className="title">Contact Us</h1>
            <div className="contact-us-content">
                <div className="contact-details">
                    <div className="swirge-mail">
                        <img src="/assets/images/mail.svg" alt="mail"/>
                        <Link to='mailto:contact@swirgepay.com'>contact@swirgepay.com</Link>
                    </div>
                    <p className="text">
                        As a small team we are unable to offer support in most cases but encourage 
                        anyone facing issues with their wallet, transaction, or Swirge | Pay related 
                        question to join our active community on telegram.
                    </p>
                    <div className="socials">
                        <Link to='#'>
                            <img className='facebook' src="/assets/images/facebook.svg" alt="facebook"/>
                        </Link>
                        <Link to='#'>
                            <img className='twitter' src="/assets/images/twitter-blue.svg" alt="twitter"/>
                        </Link>
                        <Link to='#'>
                            <img className='swirge' src="/assets/images/swirge-logo.svg" alt="swirge"/>
                        </Link>
                        <Link to='#'>
                            <img className='telegram' src="/assets/images/telegram.svg" alt="telegram"/>
                        </Link>
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
