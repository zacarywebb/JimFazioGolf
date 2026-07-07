import Button from "../components/Button.jsx";
import { asset } from "../lib/asset.js";

const CTASection = () => {
    return (
        <section className="relative overflow-hidden">
            <img
                src={asset("images/Slideshow/WestchesterOverview.jpg")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-night-950/78" />

            <div className="container-site relative flex flex-col items-center gap-7 py-24 text-center md:py-32" data-reveal>
                <p className="eyebrow">Begin the Journey</p>
                <h2 className="display-lg max-w-3xl">
                    Have land with potential? Let's shape something{" "}
                    <em className="text-brass-300">timeless</em>.
                </h2>
                <p className="lede max-w-xl text-sage-300">
                    Whether you're exploring a new development or reimagining an existing
                    course, we'd love to hear about your vision.
                </p>
                <Button text="Start the Conversation" to="/contact" className="mt-2" />
            </div>
        </section>
    );
};

export default CTASection;
