import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants/index.js";
import { asset } from "../lib/asset.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const linkClass = ({ isActive }) =>
        `relative text-[0.78rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
            isActive ? "text-brass-300" : "text-cream-50/80 hover:text-cream-50"
        } after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-brass-400 after:transition-all after:duration-300 ${
            isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
        }`;

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                scrolled || menuOpen
                    ? "border-b border-cream-50/10 bg-night-900/90 backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container-site flex items-center justify-between py-4">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img
                        src={asset("images/jfazio_logo_white_fill.svg")}
                        alt="Jim Fazio Golf"
                        className="w-36 brightness-0 invert md:w-44"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {navLinks.map(({ label, to }) => (
                        <NavLink key={label} to={to} className={linkClass} end={to === "/"}>
                            {label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn-primary !px-5 !py-2.5">
                        Start a Project
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                >
                    <span
                        className={`h-px w-6 bg-cream-50 transition-transform duration-300 ${
                            menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`h-px w-6 bg-cream-50 transition-transform duration-300 ${
                            menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                        }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-x-0 top-[69px] bottom-0 z-40 flex flex-col bg-night-900/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
                    menuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <nav className="container-site flex flex-col gap-2 pt-10">
                    {navLinks.map(({ label, to }, i) => (
                        <NavLink
                            key={label}
                            to={to}
                            end={to === "/"}
                            onClick={() => setMenuOpen(false)}
                            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
                            className={({ isActive }) =>
                                `border-b border-cream-50/10 py-5 font-display text-3xl transition-all duration-500 ${
                                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                } ${isActive ? "text-brass-300" : "text-cream-50"}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="btn-primary mt-8 self-start"
                    >
                        Start a Project
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
