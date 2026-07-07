import { golfServices, technicalServices } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const workImages = [
    { src: "/images/courses/bankSketch.JPG", alt: "Bank sketch study" },
    { src: "/images/courses/blueprint2.jpeg", alt: "Course blueprint" },
    { src: "/images/courses/tractor.JPG", alt: "Course shaping in progress" },
    { src: "/images/courses/flowerBed.JPG", alt: "Finished landscaping detail" },
];

const ServiceCard = ({ title, items }) => (
    <div className="card-lux flex flex-col gap-4 p-7">
        <h3 className="font-display text-2xl text-cream-50">{title}</h3>
        <ul className="flex flex-col gap-2.5">
            {items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-sm text-sage-300">
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-brass-400" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const GolfServicesShowcase = () => {
    return (
        <section className="section bg-night-800/40">
            <div className="container-site flex flex-col gap-14">
                <div className="mx-auto max-w-3xl text-center" data-reveal>
                    <p className="eyebrow mb-4 justify-center after:h-px after:w-10 after:bg-brass-500 after:content-['']">
                        Golf Services
                    </p>
                    <h2 className="display-lg">Every discipline, under one roof</h2>
                    <p className="lede mt-5 text-sage-400">
                        We provide a comprehensive suite of services that most other
                        architects outsource. Aerial mapping, 3D modeling, and interactive
                        visualizations bring golf course concepts to life with exceptional
                        precision — preserving the natural landscape while blending
                        tradition and innovation.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3" data-reveal>
                    {golfServices.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                {/* Technology showcase */}
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="flex flex-col gap-6" data-reveal>
                        <video
                            controls
                            playsInline
                            muted
                            autoPlay
                            loop
                            className="aspect-video w-full border border-cream-50/10 object-cover"
                        >
                            <source src={asset("videos/videoGame.MP4")} type="video/mp4" />
                        </video>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {technicalServices.map((service) => (
                                <ServiceCard key={service.title} {...service} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6" data-reveal>
                        <div className="img-frame">
                            <img
                                src={asset("images/courses/arielModel.JPG")}
                                alt="Aerial terrain model"
                                loading="lazy"
                                className="h-72 w-full border border-cream-50/10 object-cover"
                            />
                        </div>
                        <video
                            controls
                            playsInline
                            muted
                            autoPlay
                            loop
                            className="aspect-video w-full border border-cream-50/10 object-cover"
                        >
                            <source src={asset("videos/3dModel.mov")} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4" data-reveal>
                    {workImages.map(({ src, alt }) => (
                        <div key={src} className="img-frame aspect-square border border-cream-50/10">
                            <img src={asset(src)} alt={alt} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GolfServicesShowcase;
