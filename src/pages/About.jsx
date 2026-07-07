import PageHero from "../components/PageHero.jsx";
import Projects from "../sections/Projects.jsx";
import GolfServicesShowcase from "../components/GolfServices.jsx";
import TeamSection from "../components/TeamSection.jsx";
import useReveal from "../hooks/useReveal.js";

const About = () => {
    const scope = useReveal();

    return (
        <main ref={scope}>
            <PageHero
                image="images/courses/MarcoSimoneHero.webp"
                eyebrow="About Us"
                title="A legacy shaped into the land"
                subtitle="Jim Fazio's legacy in golf course architecture spans decades and continents — from championship venues to private retreats."
            />
            <Projects />
            <GolfServicesShowcase />
            <TeamSection />
        </main>
    );
};

export default About;
