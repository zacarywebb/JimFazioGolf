import { useCallback, useEffect, useState } from "react";
import { slideshowSlides } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const AUTOPLAY_MS = 5000;

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const length = slideshowSlides.length;

    const next = useCallback(() => setCurrent((p) => (p + 1) % length), [length]);
    const prev = useCallback(() => setCurrent((p) => (p - 1 + length) % length), [length]);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(next, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [next, paused]);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    return (
        <div
            className="group relative overflow-hidden focus:outline-none"
            tabIndex={0}
            role="region"
            aria-label="Course gallery"
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Slides */}
            <div className="relative aspect-[16/10] w-full">
                {slideshowSlides.map(({ name, image }, i) => (
                    <img
                        key={image}
                        src={asset(image)}
                        alt={name}
                        loading={i === 0 ? "eager" : "lazy"}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                            i === current ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night-950/85 via-transparent to-transparent" />
            </div>

            {/* Caption + counter */}
            <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                <div>
                    <p className="font-display text-xl text-cream-50 sm:text-2xl">
                        {slideshowSlides[current].name}
                    </p>
                    <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brass-300">
                        {slideshowSlides[current].location}
                    </p>
                </div>
                <p className="font-display text-sm text-cream-50/70 tabular-nums">
                    {String(current + 1).padStart(2, "0")} / {String(length).padStart(2, "0")}
                </p>
            </div>

            {/* Arrows */}
            {[
                { label: "Previous slide", onClick: prev, side: "left-4", glyph: "←" },
                { label: "Next slide", onClick: next, side: "right-4", glyph: "→" },
            ].map(({ label, onClick, side, glyph }) => (
                <button
                    key={label}
                    onClick={onClick}
                    aria-label={label}
                    className={`absolute top-1/2 ${side} flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-cream-50/20 bg-night-900/60 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:border-brass-400 hover:text-brass-300 focus-visible:opacity-100`}
                >
                    {glyph}
                </button>
            ))}

            {/* Progress dots */}
            <div className="absolute top-5 left-1/2 flex -translate-x-1/2 gap-2">
                {slideshowSlides.map((slide, i) => (
                    <button
                        key={slide.image}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1 cursor-pointer transition-all duration-300 ${
                            i === current ? "w-7 bg-brass-400" : "w-3 bg-cream-50/30 hover:bg-cream-50/60"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
