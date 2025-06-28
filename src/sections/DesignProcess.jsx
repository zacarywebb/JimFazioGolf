import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesignProcess = () => {
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
                                start: 'top 80%',
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
            id="design-process"
            className="relative flex flex-col gap-10 text-white mt-0 overflow-hidden"
        >
            {/* Hero Section */}
            <section className="relative w-full h-[78vh]">
                <img
                    src="/images/FazioBlueprint.jpg"
                    alt="Fazio Hero"
                    className="w-full h-full object-cover opacity-60 pt-10"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl px-6">
                    <div className="card-border bg-black-100/70 rounded-xl p-8 shadow-lg">
                        <h1 className="text-4xl uppercase md:text-5xl font-extrabold text-white-50 text-center fade-in">
                            Timeless Design
                        </h1>
                    </div>
                </div>
            </section>

            <div className='md:mt-8 xl:mt-10 sm:mt-5'>
                {/* Main Row */}
                <div className="relative z-10 flex flex-col md:flex-row gap-10 w-full">
                    {/* Left Column */}
                    <div className="flex flex-col w-full md:w-1/2 px-5 md:px-10">
                            <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl fade-in z-50">
                                <h3 className="text-2xl text-white-50 font-extrabold mb-6">Designing with Purpose and Precision</h3>
                                <p className="mb-10  text-lg leading-relaxed">
                                    Golf course architecture demands a deliberate balance between aesthetic vision, engineering precision,
                                    and environmental responsibility. Our design process begins with a comprehensive understanding of the
                                    land — its topography, soil composition, hydrology, and native vegetation — to ensure every feature is
                                    thoughtfully integrated into the natural landscape.
                                </p>
                                <p className="mb-10 text-lg leading-relaxed">
                                    Designing with purpose means aligning each project with the client’s goals, site constraints, and long-term
                                    maintenance strategy. We emphasize strategic routing to optimize land use, sightlines, and player flow while
                                    minimizing environmental disruption. Bunker placements, tee and green orientations, and elevation adjustments
                                    are engineered to challenge players thoughtfully and enhance the course’s visual and tactical appeal.
                                </p>
                                <p className="mb-10 text-lg leading-relaxed">
                                    Collaboration is key. We work closely with our clients from initial concept through final shaping, ensuring that the
                                    course harmonizes with the environment and meets modern regulatory and safety standards. The result is a course that is not
                                    only visually captivating, but plays as an extension of its surrounding environment and leaves a lasting impression.
                                </p>
                            </div>


                            <img src="/images/courses/sketch.avif" alt="Course 3" className="w-[85%] h-[800px] mx-10 mt-8" />

                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-1/2 px-5 md:px-10 flex flex-col">
                        <div className="fade-in">
                            <img src='images/courses/Currahee.1-2.jpg' alt='Course 1' className='w-full h-[500px] object-cover mt-8' />
                        </div>

                        <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl mt-10 fade-in z-50">
                            <h3 className="text-2xl text-white-50 font-extrabold mb-6">Our Philosophy</h3>
                            <p className="mb-10 text-lg leading-relaxed">
                                Our design philosophy is rooted in rich tradition and propelled by modern innovation. At the
                                foundation of every exceptional golf course lies a profound connection to the land.
                                Our design approach begins with a deep appreciation for the natural landscape—working in
                                harmony with its topography, vegetation, and geological identity. By thoughtfully
                                integrating these elements, we shape courses that feel timeless, authentic, and inherently
                                part of their environment.
                            </p>
                            <p className="mb-10 text-lg leading-relaxed">
                                A truly great course extends beyond strategy and aesthetics, it tells a story. Each hole is
                                conceived as part of a cohesive narrative, offering a progression of challenges and
                                memorable moments that engage both the intellect and the senses.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-15 px-4 mb-10 fade-in">
                            {[
                                { alt: "grid1", src: "/images/courses/sketch2.jpg" },
                                { alt: "grid2", src: "/images/courses/JimMike.JPG" },
                                { alt: "grid3", src: "/images/courses/Construction.jpg" },
                                { alt: "grid4", src: "/images/courses/model3.jpg" },
                                { alt: "grid5", src: "/images/courses/golfCart.jpg" },
                                { alt: "grid6", src: "/images/courses/tractor.png" },
                            ].map(({ alt, src },) => (
                                <div
                                    key={alt}
                                    className="bg-black-100/40 border border-white/5 rounded-lg overflow-hidden w-[110%] h-60 transition-transform duration-300 hover:scale-115">
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full] h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            {/* Section Heading */}
            <div className="text-center px-6 mt-10 fade-in">
                <h2 className="text-4xl font-extrabold uppercase text-white-50 mb-4">Design Process</h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-20 pb-20 fade-in">
                {/* Card 1 */}
                <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl">
                    <h3 className="text-2xl text-white-50 font-extrabold mb-6">Client Interview</h3>
                    <p className="text-lg leading-loose">
                        When meeting with a client to explore the development of their property, our first priority is to
                        understand their vision and objectives for the project. We take the time to ask thoughtful questions
                        about their desired timeline, budget, and overall expectations. This dialogue also includes identifying
                        any potential challenges, such as zoning regulations, permitting requirements, or environmental constraints.
                        With this understanding in place, we’re able to tailor our services to best support the client’s goals and
                        deliver a design that aligns with both their needs and the site’s opportunities.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl">
                    <h3 className="text-2xl text-white-50 font-extrabold mb-6">Preliminary Design Phase</h3>
                    <p className="text-lg leading-loose">
                        During the preliminary design phase, we begin by collecting and analyzing foundational data, including topographic
                        surveys, aerial imagery, and property boundary documentation. This phase may also include site visits to existing golf
                        course facilities to better understand the client’s aesthetic preferences, functional needs, and desired style. Based on
                        this research, our design team develops initial conceptual layouts, conducts site analysis studies, and explores multiple
                        routing alternatives. Recommendations for the location of key infrastructure—such as the clubhouse, practice areas, and
                        maintenance facilities—are also formulated to ensure seamless integration within the overall site context.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl">
                    <h3 className="text-2xl text-white-50 font-extrabold mb-6">Design Development Phase</h3>
                    <p className="text-lg leading-loose">
                        The design development phase focuses on transforming the approved routing concept into a fully detailed and constructible plan. This
                        stage involves in-depth research, site analysis, and design refinement to ensure both functional performance and aesthetic cohesion.
                        Specific design elements such as tee complexes, green contours, bunker placement, and water feature integration are carefully shaped and
                        positioned. Landscape treatments are defined by designating turfgrass, native planting areas, and ornamental landscaping zones. Comprehensive
                        grading and clearing studies are conducted to calculate earthwork quantities and assess construction costs, ensuring the project remains within
                        budget while aligning with the client’s vision and environmental conditions.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="card bg-black-100/30 border border-white/5 p-6 md:p-8 rounded-xl">
                    <h3 className="text-2xl text-white-50 font-extrabold mb-6">Final Design Phase</h3>
                    <p className="text-lg leading-loose">
                        The final design phase involves the preparation of comprehensive construction drawings and technical specifications required to execute the
                        golf course build. These detailed documents include centerline staking, finalized routing plans, strategic design elements, and plans for clearing,
                        grading, drainage, and irrigation systems. Additionally, this phase includes grassing and greens specifications, outlining turf selection and planting
                        strategies tailored to site conditions. Each drawing and specification is developed to ensure precision during construction and to maintain the integrity
                        of the design throughout implementation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;
