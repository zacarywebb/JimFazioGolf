import React, { useEffect, useRef } from 'react';
import Projects from "../sections/Projects.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GolfServices from "../components/GolfServices.jsx";
import TeamSection from "../components/TeamSection.jsx";
import { gsap } from 'gsap';
import WorkExamples from "../components/WorkExamples.jsx";
import GolfServicesShowcase from "../components/GolfServices.jsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx;

        const runAnimations = () => {
            ctx = gsap.context(() => {
                gsap.utils.toArray('.fade-in').forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 80 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: el,
                                start: 'top 95%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });
            }, sectionRef);
        };

        // Wait for scroll to finish
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



    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col gap-10 bg-black-200 text-white mt-0 overflow-hidden"
        >
            {/* Hero Image Section */}
            <section className="relative w-full h-[82vh]">
                <img
                    src="/images/courses/MarcoSimoneHero.webp"
                    alt="About Hero"
                    className="w-full h-full object-cover opacity-65"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl px-6">
                    <div className="card-border bg-black-100/70 rounded-xl p-8 shadow-lg">
                        <h1 className="text-4xl uppercase md:text-5xl font-extrabold text-white-50 text-center fade-in">
                            About Jim Fazio Golf
                        </h1>
                    </div>
                </div>
            </section>

            <div>
                <Projects />
            </div>
            <div>
                <GolfServicesShowcase />
            </div>
            <div>
                <TeamSection />
            </div>
        </section>
    );
};


export default About;
