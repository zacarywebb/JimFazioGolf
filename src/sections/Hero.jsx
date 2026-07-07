import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { stats } from "../constants/index.js";

const Hero = () => {
    useGSAP(() => {
        gsap.timeline({ defaults: { ease: "power3.out" } })
            .fromTo(
                ".hero-stagger",
                { y: 48, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
            )
            .fromTo(
                ".hero-canvas",
                { opacity: 0 },
                { opacity: 1, duration: 1.4 },
                "-=0.9"
            );
    });

    return (
        <section className="relative overflow-hidden">
            {/* Ambient backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 75% 40%, rgba(62, 92, 72, 0.28), transparent 65%)",
                }}
            />

            <div className="container-site relative grid min-h-screen items-center gap-10 pt-28 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:pt-24 lg:pb-0">
                {/* Copy */}
                <div className="relative z-10 flex flex-col items-start gap-7">
                    <p className="eyebrow hero-stagger">Golf Course Architecture</p>

                    <h1 className="display-xl hero-stagger">
                        Behind every great course is an architect with{" "}
                        <em className="text-brass-300">a vision</em>
                    </h1>

                    <p className="lede hero-stagger max-w-xl">
                        For over four decades, Jim Fazio Golf has shaped award-winning
                        courses across the world — designs that honor the land, challenge
                        the player, and stand the test of time.
                    </p>

                    <div className="hero-stagger flex flex-wrap gap-4">
                        <Button text="Explore Our Work" to="/about" />
                        <Button text="Start a Project" to="/contact" variant="outline" />
                    </div>

                    <dl className="hero-stagger mt-6 grid w-full grid-cols-2 gap-x-8 gap-y-6 border-t border-cream-50/10 pt-8 sm:grid-cols-4">
                        {stats.map(({ value, label }) => (
                            <div key={label}>
                                <dt className="sr-only">{label}</dt>
                                <dd className="font-display text-3xl text-cream-50">{value}</dd>
                                <dd className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-400">
                                    {label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* 3D model */}
                <div className="hero-canvas relative h-[46vh] lg:h-[82vh]">
                    <HeroExperience />
                    <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-cream-50/15 bg-night-900/70 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sage-300 backdrop-blur-sm">
                        Drag to explore
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
