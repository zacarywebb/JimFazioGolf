import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, className, id, to }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (to) {
            navigate(to);
        } else {
            const target = document.getElementById(id);
            if (target) {
                const offset = window.innerHeight * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    return (
        <a onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src='/images/arrow-right.svg' alt='right arrow' />
                </div>
            </div>
        </a>
    );
};

export default Button;
