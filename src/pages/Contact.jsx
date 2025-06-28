import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx;

        const runAnimations = () => {
            ctx = gsap.context(() => {
                gsap.utils.toArray('.fade-in').forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 70 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 99%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });
            }, sectionRef);
        };

        const waitForScroll = () => {
            if (window.scrollY === 0) {
                runAnimations();
            } else {
                setTimeout(waitForScroll, 10);
            }
        };

        waitForScroll();

        return () => ctx?.revert();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();
            if (res.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            alert('Something went wrong. Please try again.');
        }
    };


    return (
        <section ref={sectionRef} className="text-white mt-0 overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full h-[78vh]">
                <img
                    src="/images/Slideshow/WestchesterOverview.jpg"
                    alt="Contact Hero"
                    className="w-full h-full object-cover opacity-60 pt-10"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl px-6">
                    <div className="card-border bg-black-100/70 rounded-xl p-8 shadow-lg">
                        <h1 className="text-4xl uppercase md:text-5xl font-extrabold text-white-50 text-center fade-in">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-black-200 text-white px-6 md:px-16 py-20 fade-in min-h-screen">
                <div className="max-w-3xl mx-auto text-center fade-in">
                    <h2 className="text-4xl text-white-50 font-extrabold uppercase tracking-wider mb-4">
                        Get in touch with our team
                    </h2>
                    <p className="text-white/80 text-lg mb-4">
                        We’d love to connect—whether you’re exploring a potential collaboration or seeking more information about our courses and services.
                    </p>
                    <p className="text-white/70 text-md">
                        Or email us directly at <a href="mailto:CONTACT@JIMFAZIOGOLF.COM" className="hover:text-white">CONTACT@JIMFAZIOGOLF.COM</a>
                    </p>
                </div>



                <form
                    className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 space-y-6 fade-in"
                    onSubmit={onSubmit}
                >

                    <div className="flex flex-col fade-in">
                        <label htmlFor="name" className="text-white/80 mb-2">Name</label>
                        <input
                            value = {name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            required
                            className="rounded-md p-3 bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Name"
                        />
                    </div>

                    <div className="flex flex-col fade-in">
                        <label htmlFor="email" className="text-white/80 mb-2">Email</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            required
                            className="rounded-md p-3 bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="flex flex-col fade-in">
                        <label htmlFor="message" className="text-white/80 mb-2">Message</label>
                        <textarea
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows="5"
                            required
                            className="rounded-md p-3 bg-black border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Write your message here..."
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-white-50 text-black font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-gray-200 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>


            </section>
        </section>
    );
};

export default Contact;
