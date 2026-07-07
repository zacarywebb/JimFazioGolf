import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { asset } from "../lib/asset.js";

const PageHero = ({ image, eyebrow, title, subtitle }) => {
    useGSAP(() => {
        gsap.fromTo(
            ".page-hero-stagger",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.15 }
        );
    });

    return (
        <section className="page-hero">
            <img
                src={asset(image)}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="container-site relative z-10 flex flex-col items-start gap-5 pt-40 pb-16">
                {eyebrow && <p className="eyebrow page-hero-stagger">{eyebrow}</p>}
                <h1 className="display-xl page-hero-stagger max-w-3xl">{title}</h1>
                {subtitle && (
                    <p className="lede page-hero-stagger max-w-2xl text-sage-300">{subtitle}</p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
