import React from 'react';
import './cta-button.scss';

const CtaButton = ({shape, value, url, type, disabled}) => {
    return !type ? (
        <button className='cta-button'>
            <a href={url} className={`${shape} cta-button`}>
                {value}
            </a>
        </button>
    ) : (
        <button 
            className={`${shape} cta-submit`} 
            type='submit' disabled={disabled} 
            style={{opacity: `${disabled ? '.5' : '1'}`}}
        >
            {value}
        </button>
    );
}

export default CtaButton;
