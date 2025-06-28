import React from 'react';
import Slideshow from "../components/Slideshow.jsx";

const Projects = () => {
    return (
        <section className="pt-10 pb-20 text-white flex flex-col gap-10">

            {/* Centered Heading and First Paragraph */}
            <div className="text-center px-5 md:px-10 fade-in">
                <h2 className="text-4xl font-extrabold tracking-wide uppercase text-white-50">
                    Award-Winning Projects
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-white">
                    We have proudly designed and developed dozens of award-winning, prestigious golf courses across the United States and around the world.
                    Each of our courses reflects our commitment to excellence, innovation, and respect for the land.
                </p>
            </div>

            {/* Row: Remaining Text + Slideshow */}
            <div className="flex flex-col md:flex-row gap-10 px-5 md:px-10 fade-in">

                {/* Text Column (minus heading/first paragraph) */}
                <div className="flex-1 card border-white/5 p-6 md:p-8 rounded-xl">
                    <h3 className="text-2xl text-white-50 font-extrabold mb-6">Notable Projects</h3>
                    <p className="text-lg text-white">
                        Our portfolio includes premier destinations such as <strong>The River Golf Club</strong> in North Augusta, SC, <strong>Boca West Country Club</strong> in Boca Raton, FL, and
                        <strong> Trump National Golf Club</strong> in Westchester, NY. Internationally, our work extends to <strong>Golf Nazionale Golf Club</strong> and <strong>Marco Simone Golf and Country Club</strong> in Rome, Italy, <strong>Kasumigaseki Country Club </strong>
                        in Tokyo, Japan, <strong>Trump International Golf Club</strong>, Canouan Island, Grenadines and <strong>South Springs Country Club</strong> in Icheon, South Korea.
                    </p>
                    <p className="mt-3 text-lg text-white">
                        Other notable projects include <strong>Currahee Club</strong> in Toccoa, GA, <strong>Hawks Nest</strong> in Vero Beach, FL, <strong>El Diablo Golf Club</strong> in Ocala, FL, and
                        <strong> Trump International Golf Club</strong> in West Palm Beach, FL, and much more.
                    </p>
                    <p className="mt-3 text-lg text-white">
                        Each course is a testament to our design philosophy: creating memorable, strategic, and visually striking golf
                        experiences that stand the test of time.
                    </p>

                    {/* Logo Grid */}
                    <div className="w-full mx-auto mt-8 fade-in">
                        <div className="rounded-xl p-10 bg-white-50 border border-white/10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center justify-items-center mb-6 scale-120">
                                <img src="/images/logos/TrumpWestchester.avif" alt="Course 1" className="h-20 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                                <img src="/images/logos/TheRiver.avif" alt="Course 2" className="h-20 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                                <img src="/images/logos/CurraheeLogo.png" alt="Course 3" className="h-20 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center scale-110">
                                <img src="/images/logos/TrumpWPB.avif" alt="Course 4" className="h-20 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                                <img src="/images/logos/BocaWest.avif" alt="Course 5" className="h-20 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                                <img src="/images/logos/KCC.png" alt="Course 6" className="h-24 object-contain opacity-80 hover:opacity-100 transition hover:scale-115" />
                                <img src="/images/logos/SouthSprings.png" alt="Course 7" className="h-24 pr-5 object-contain opacity-80 hover:opacity-100 transition scale-150 hover:scale-170" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slideshow Column */}
                <div className="flex-1 flex items-center justify-center fade-in">
                    <Slideshow />
                </div>
            </div>
        </section>
    );
};

export default Projects;
