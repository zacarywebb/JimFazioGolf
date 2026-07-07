import { designPhases } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const galleryImages = [
    { src: "/images/courses/sketch2.jpg", alt: "Hand-drawn course sketch" },
    { src: "/images/courses/JimMike.JPG", alt: "Jim Fazio and Michael Freeman on site" },
    { src: "/images/courses/Construction.jpg", alt: "Course under construction" },
    { src: "/images/courses/model3.jpg", alt: "3D terrain model" },
    { src: "/images/courses/golfCart.jpg", alt: "Course inspection" },
    { src: "/images/courses/tractor.png", alt: "Earthworks and shaping" },
];

const DesignProcess = () => {
    return (
        <>
            {/* Purpose & precision */}
            <section className="section">
                <div className="container-site grid items-start gap-14 lg:grid-cols-2">
                    <div className="flex flex-col gap-6" data-reveal>
                        <p className="eyebrow">Purpose & Precision</p>
                        <h2 className="display-lg">
                            Designing with purpose and <em className="text-brass-300">precision</em>
                        </h2>
                        <p className="lede">
                            Golf course architecture demands a deliberate balance between
                            aesthetic vision, engineering precision, and environmental
                            responsibility. Our design process begins with a comprehensive
                            understanding of the land — its topography, soil composition,
                            hydrology, and native vegetation — so every feature is
                            thoughtfully integrated into the natural landscape.
                        </p>
                        <p className="lede text-sage-400">
                            We emphasize strategic routing to optimize land use, sightlines,
                            and player flow while minimizing environmental disruption.
                            Bunker placements, tee and green orientations, and elevation
                            adjustments are engineered to challenge players thoughtfully and
                            enhance the course's visual and tactical appeal.
                        </p>
                        <p className="lede text-sage-400">
                            Collaboration is key. We work closely with our clients from
                            initial concept through final shaping, ensuring the course
                            harmonizes with its environment and leaves a lasting impression.
                        </p>
                    </div>

                    <div className="img-frame" data-reveal>
                        <div className="aspect-[4/5] overflow-hidden">
                            <img
                                src={asset("images/courses/sketch.avif")}
                                alt="Original course design sketch"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process timeline */}
            <section className="section bg-night-800/40">
                <div className="container-site">
                    <div className="mb-16 max-w-2xl" data-reveal>
                        <p className="eyebrow mb-4">The Process</p>
                        <h2 className="display-lg">Four phases, one vision</h2>
                    </div>

                    <ol className="flex flex-col">
                        {designPhases.map(({ phase, title, description }) => (
                            <li
                                key={phase}
                                className="hairline grid gap-4 py-10 first:border-t-0 first:pt-0 md:grid-cols-[120px_280px_1fr] md:gap-10"
                                data-reveal
                            >
                                <span className="font-display text-5xl text-brass-500/50">{phase}</span>
                                <h3 className="font-display text-2xl text-cream-50">{title}</h3>
                                <p className="text-sm leading-relaxed text-sage-300 md:text-base">
                                    {description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* From sketch to soil gallery */}
            <section className="section">
                <div className="container-site">
                    <div className="mb-14 max-w-2xl" data-reveal>
                        <p className="eyebrow mb-4">In the Field</p>
                        <h2 className="display-lg">From sketch to soil</h2>
                        <p className="lede mt-5 text-sage-400">
                            Few designers shape courses hands-on from concept to completion.
                            These moments — sketches, models, and machines in the dirt —
                            are where the vision becomes real.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {galleryImages.map(({ src, alt }, i) => (
                            <div
                                key={src}
                                data-reveal
                                className={`img-frame border border-cream-50/10 ${
                                    i % 3 === 1 ? "md:mt-8" : ""
                                }`}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={asset(src)} alt={alt} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DesignProcess;
