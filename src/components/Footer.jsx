import { Link } from "react-router-dom";
import { navLinks } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const Footer = () => {
    return (
        <footer className="hairline bg-night-950">
            <div className="container-site grid gap-12 py-16 md:grid-cols-3 md:gap-8">
                <div className="flex flex-col gap-5">
                    <img
                        src={asset("images/jfazio_logo_white_fill.svg")}
                        alt="Jim Fazio Golf"
                        className="w-44 self-start brightness-0 invert opacity-90"
                    />
                    <p className="max-w-xs text-sm leading-relaxed text-sage-400">
                        World-class golf course architecture — blending timeless design
                        with modern technology for over four decades.
                    </p>
                </div>

                <nav className="flex flex-col gap-3 md:items-center">
                    <p className="eyebrow mb-2">Explore</p>
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            className="w-fit text-sm tracking-wide text-sage-300 transition-colors hover:text-brass-300"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex flex-col gap-3 md:items-end">
                    <p className="eyebrow mb-2">Get in Touch</p>
                    <a
                        href="mailto:contact@jimfaziogolf.com"
                        className="text-sm tracking-wide text-sage-300 transition-colors hover:text-brass-300"
                    >
                        contact@jimfaziogolf.com
                    </a>
                    <p className="text-sm text-sage-400 md:text-right">
                        Palm Beach, Florida
                    </p>
                    <Link to="/contact" className="btn-outline mt-3 !px-5 !py-2.5">
                        Start a Project
                    </Link>
                </div>
            </div>

            <div className="hairline">
                <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs tracking-wide text-sage-500 sm:flex-row">
                    <p>© {new Date().getFullYear()} Jim Fazio Golf. All rights reserved.</p>
                    <p>Golf Course Architecture & Design</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
