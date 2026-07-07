import Hero from "../sections/Hero.jsx";
import LogoMarquee from "../sections/LogoMarquee.jsx";
import FeaturedCourses from "../sections/FeaturedCourses.jsx";
import Philosophy from "../sections/Philosophy.jsx";
import ServicesTeaser from "../sections/ServicesTeaser.jsx";
import CTASection from "../sections/CTASection.jsx";
import useReveal from "../hooks/useReveal.js";

const Home = () => {
    const scope = useReveal();

    return (
        <main ref={scope}>
            <Hero />
            <LogoMarquee />
            <FeaturedCourses />
            <Philosophy />
            <ServicesTeaser />
            <CTASection />
        </main>
    );
};

export default Home;
