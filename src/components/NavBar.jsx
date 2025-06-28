import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="navbar">
            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-wrap items-center justify-between gap-4 inner w-full">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img
                        src="/images/jfazio_logo_white_fill.svg"
                        alt="logo"
                        className="w-40 min-w-[120px] object-contain"
                    />
                </Link>

                {/* Nav Links */}
                <nav className="desktop">
                    <ul className="flex flex-wrap text-xl font-bold text-glow items-center gap-6 pr-4">
                        {[
                            { label: "Home", to: "/" },
                            { label: "About", to: "/about" },
                            { label: "Design", to: "/design" },
                            { label: "Contact", to: "/contact" }
                        ].map(({ label, to, isAnchor }) => (
                            <li key={label}>
                                    <Link
                                        to={to}
                                        className="px-4 py-2 rounded-md bg-blue-50/40 text-white-50 hover:bg-white/10 transition duration-300"
                                    >
                                        {label}
                                    </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Header */}
            <div className="flex flex-row lg:hidden justify-between items-center px-5 py-4">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img
                        src="/images/jfazio_logo_white_fill.svg"
                        alt="logo"
                        className="w-40 object-contain"
                    />
                </Link>

                {/* Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-8 h-8 mx-15 hover:cursor-pointer hover:scale-110 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed top-20 left-0 w-full bg-black-200 z-50 p-6 flex flex-col gap-4">
                    {[
                        { label: "Home", to: "/" },
                        { label: "About", to: "/about" },
                        { label: "Design", to: "/design" },
                        { label: "Contact", to: "#contact", isAnchor: true }
                    ].map(({ label, to, isAnchor }) => (
                        isAnchor ? (
                            <a
                                key={label}
                                href={to}
                                className="text-white text-xl bg-blue-50/40 px-4 py-2 rounded-md hover:bg-white/10 transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ) : (
                            <Link
                                key={label}
                                to={to}
                                className="text-white text-xl bg-blue-50/40 px-4 py-2 rounded-md hover:bg-white/10 transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </header>
    );
};

export default NavBar;
