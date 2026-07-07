import Button from "../components/Button.jsx";
import { featuredCourses } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const FeaturedCourses = () => {
    return (
        <section className="section">
            <div className="container-site">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
                    <div className="max-w-xl">
                        <p className="eyebrow mb-4">Portfolio</p>
                        <h2 className="display-lg">Signature Courses</h2>
                    </div>
                    <p className="lede max-w-md text-sage-400">
                        From the Grenadines to South Korea — each course reflects a
                        commitment to excellence, innovation, and respect for the land.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredCourses.map(({ name, location, image }, i) => (
                        <figure
                            key={name + location}
                            data-reveal
                            className={`img-frame group ${i % 3 === 1 ? "lg:mt-12" : ""}`}
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img src={asset(image)} alt={name} loading="lazy" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-transparent to-transparent" />
                            <figcaption className="absolute bottom-0 left-0 w-full p-6">
                                <p className="font-display text-xl text-cream-50">{name}</p>
                                <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brass-300">
                                    {location}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-14 flex justify-center" data-reveal>
                    <Button text="View the Full Story" to="/about" variant="outline" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
