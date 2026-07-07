import Button from "../components/Button.jsx";

const ThankYou = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-7 px-6 text-center">
            <p className="eyebrow justify-center after:h-px after:w-10 after:bg-brass-500 after:content-['']">
                Message Received
            </p>
            <h1 className="display-lg max-w-2xl">
                Thank you — we'll be in touch <em className="text-brass-300">shortly</em>
            </h1>
            <p className="lede max-w-xl text-sage-400">
                Your message has been sent successfully. We appreciate your interest
                in Jim Fazio Golf.
            </p>
            <Button text="Back to Home" to="/" variant="outline" className="mt-2" />
        </main>
    );
};

export default ThankYou;
