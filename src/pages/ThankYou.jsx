// src/pages/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section className="min-h-screen bg-black-200 text-white flex flex-col justify-center items-center text-center px-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white-50">Thank You!</h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
                Your message has been sent successfully. We appreciate your interest and will be in touch shortly.
            </p>
            <Link
                to="/"
                className="bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition"
            >
                Back to Home
            </Link>
        </section>
    );
};

export default ThankYou;
