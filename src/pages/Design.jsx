import PageHero from "../components/PageHero.jsx";
import DesignProcess from "../sections/DesignProcess.jsx";
import CTASection from "../sections/CTASection.jsx";
import useReveal from "../hooks/useReveal.js";

const Design = () => {
    const scope = useReveal();

    return (
        <main ref={scope}>
            <PageHero
                image="images/FazioBlueprint.jpg"
                eyebrow="Design"
                title="Timeless design, drawn by hand"
                subtitle="From the first sketch to the final grassing plan — a process refined over four decades of shaping land into golf."
            />
            <DesignProcess />
            <CTASection />
        </main>
    );
};

export default Design;
