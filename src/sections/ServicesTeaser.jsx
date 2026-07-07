import Button from "../components/Button.jsx";
import { golfServices } from "../constants/index.js";

const ServicesTeaser = () => {
    return (
        <section className="section">
            <div className="container-site">
                <div className="mb-14 max-w-2xl" data-reveal>
                    <p className="eyebrow mb-4">What We Do</p>
                    <h2 className="display-lg">From first sketch to final grassing</h2>
                    <p className="lede mt-5 text-sage-400">
                        We provide a comprehensive suite of services most architects
                        outsource — aerial mapping, 3D modeling, and interactive
                        visualizations bring each concept to life with exceptional
                        precision.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {golfServices.map(({ title, items }, i) => (
                        <div key={title} className="card-lux flex flex-col gap-5 p-8" data-reveal>
                            <span className="font-display text-4xl text-brass-500/60">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="display-md !text-2xl">{title}</h3>
                            <ul className="flex flex-col gap-2.5">
                                {items.map((item) => (
                                    <li key={item} className="flex items-baseline gap-3 text-sm text-sage-300">
                                        <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-brass-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center" data-reveal>
                    <Button text="All Services & Technology" to="/about" variant="outline" />
                </div>
            </div>
        </section>
    );
};

export default ServicesTeaser;
