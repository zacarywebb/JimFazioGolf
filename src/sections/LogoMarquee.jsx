import { clubLogos } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const LogoMarquee = () => {
    return (
        <section className="bg-cream-50 py-12">
            <p className="mb-8 text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-night-600">
                Trusted by prestigious clubs worldwide
            </p>
            <div className="marquee">
                <div className="marquee-track">
                    {[...clubLogos, ...clubLogos].map(({ name, src }, i) => (
                        <img
                            key={`${name}-${i}`}
                            src={asset(src)}
                            alt={name}
                            className="mx-10 h-16 w-auto object-contain opacity-80 md:mx-14 md:h-20"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
