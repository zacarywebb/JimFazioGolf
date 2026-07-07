import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-reveal for any descendant marked with [data-reveal].
 * Returns a ref to attach to the section container.
 */
const useReveal = () => {
    const scope = useRef(null);

    useGSAP(
        () => {
            gsap.utils.toArray("[data-reveal]").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 48 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        },
        { scope }
    );

    return scope;
};

export default useReveal;
