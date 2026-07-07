import { teamMembers } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const TeamSection = () => {
    return (
        <section className="section">
            <div className="container-site">
                <div className="mx-auto mb-14 max-w-2xl text-center" data-reveal>
                    <p className="eyebrow mb-4 justify-center after:h-px after:w-10 after:bg-brass-500 after:content-['']">
                        Meet the Team
                    </p>
                    <h2 className="display-lg">The minds behind the courses</h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {teamMembers.map(({ name, title, image, paragraphs }) => (
                        <article key={name} className="card-lux flex flex-col p-8 md:p-10" data-reveal>
                            <div className="mb-8 flex items-center gap-6">
                                <img
                                    src={asset(image)}
                                    alt={name}
                                    loading="lazy"
                                    className="h-24 w-24 rounded-full border border-brass-500/40 object-cover"
                                />
                                <div>
                                    <h3 className="font-display text-2xl text-cream-50">{name}</h3>
                                    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brass-300">
                                        {title}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {paragraphs.map((text, i) => (
                                    <p key={i} className="text-sm leading-relaxed text-sage-300">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
