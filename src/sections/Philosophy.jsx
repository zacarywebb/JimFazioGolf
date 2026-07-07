import Button from "../components/Button.jsx";
import { asset } from "../lib/asset.js";

const Philosophy = () => {
    return (
        <section className="section bg-night-800/40">
            <div className="container-site grid items-center gap-14 lg:grid-cols-2">
                <div className="img-frame order-2 lg:order-1" data-reveal>
                    <div className="aspect-[4/3] overflow-hidden">
                        <img
                            src={asset("images/courses/Currahee.1-2.jpg")}
                            alt="Currahee Club course design"
                            loading="lazy"
                        />
                    </div>
                    <figure className="card-lux absolute right-5 bottom-5 max-w-[240px] p-5 max-sm:hidden">
                        <blockquote className="font-display text-lg leading-snug text-cream-50 italic">
                            "A truly great course extends beyond strategy — it tells a story."
                        </blockquote>
                    </figure>
                </div>

                <div className="order-1 flex flex-col items-start gap-6 lg:order-2" data-reveal>
                    <p className="eyebrow">Our Philosophy</p>
                    <h2 className="display-lg">
                        Rooted in tradition, propelled by <em className="text-brass-300">innovation</em>
                    </h2>
                    <p className="lede">
                        At the foundation of every exceptional golf course lies a profound
                        connection to the land. Our approach begins with a deep
                        appreciation for the natural landscape — working in harmony with
                        its topography, vegetation, and geological identity.
                    </p>
                    <p className="lede text-sage-400">
                        Each hole is conceived as part of a cohesive narrative, offering a
                        progression of challenges and memorable moments that engage both
                        the intellect and the senses.
                    </p>
                    <Button text="Our Design Process" to="/design" variant="outline" className="mt-2" />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
