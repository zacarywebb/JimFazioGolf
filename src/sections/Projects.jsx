import Slideshow from "../components/Slideshow.jsx";
import { clubLogos } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const Projects = () => {
    return (
        <section className="section">
            <div className="container-site flex flex-col gap-16">
                <div className="mx-auto max-w-3xl text-center" data-reveal>
                    <p className="eyebrow mb-4 justify-center after:h-px after:w-10 after:bg-brass-500 after:content-['']">
                        Award-Winning Projects
                    </p>
                    <h2 className="display-lg">A portfolio spanning continents</h2>
                    <p className="lede mt-5 text-sage-400">
                        Dozens of award-winning, prestigious golf courses across the
                        United States and around the world — each a testament to
                        excellence, innovation, and respect for the land.
                    </p>
                </div>

                <div data-reveal>
                    <Slideshow />
                </div>

                <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
                    <div className="flex flex-col gap-5" data-reveal>
                        <h3 className="display-md">Notable Projects</h3>
                        <p className="lede">
                            Our portfolio includes premier destinations such as{" "}
                            <strong className="text-cream-50">The River Golf Club</strong> in North
                            Augusta, SC,{" "}
                            <strong className="text-cream-50">Boca West Country Club</strong> in Boca
                            Raton, FL, and{" "}
                            <strong className="text-cream-50">Trump National Golf Club</strong> in
                            Westchester, NY. Internationally, our work extends to{" "}
                            <strong className="text-cream-50">Golf Nazionale</strong> and{" "}
                            <strong className="text-cream-50">Marco Simone Golf and Country Club</strong>{" "}
                            in Rome, Italy,{" "}
                            <strong className="text-cream-50">Kasumigaseki Country Club</strong> in
                            Tokyo, Japan,{" "}
                            <strong className="text-cream-50">Trump International Golf Club</strong> on
                            Canouan Island, Grenadines, and{" "}
                            <strong className="text-cream-50">South Springs Country Club</strong> in
                            Icheon, South Korea.
                        </p>
                        <p className="lede text-sage-400">
                            Other notable projects include{" "}
                            <strong className="text-cream-50">Currahee Club</strong> in Toccoa, GA,{" "}
                            <strong className="text-cream-50">Hawks Nest</strong> in Vero Beach, FL,{" "}
                            <strong className="text-cream-50">El Diablo Golf Club</strong> in Ocala,
                            FL, and{" "}
                            <strong className="text-cream-50">Trump International Golf Club</strong> in
                            West Palm Beach, FL — and many more.
                        </p>
                    </div>

                    <div className="bg-cream-50 p-10" data-reveal>
                        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3">
                            {clubLogos.map(({ name, src }) => (
                                <img
                                    key={name}
                                    src={asset(src)}
                                    alt={name}
                                    loading="lazy"
                                    className="h-16 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
