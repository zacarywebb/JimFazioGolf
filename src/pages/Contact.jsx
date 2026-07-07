import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import useReveal from "../hooks/useReveal.js";

const inputClass =
    "w-full border border-cream-50/15 bg-night-800/60 px-4 py-3.5 text-sm text-cream-50 placeholder-sage-500 transition-colors duration-300 focus:border-brass-400 focus:outline-none";

const Contact = () => {
    const scope = useReveal();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        // Demo deployment is static — simulate a successful send.
        setTimeout(() => navigate("/thank-you"), 600);
    };

    return (
        <main ref={scope}>
            <PageHero
                image="images/Slideshow/WestchesterOverview.jpg"
                eyebrow="Contact"
                title="Let's talk about your land"
                subtitle="Whether you're exploring a collaboration or seeking more information about our courses and services — we'd love to connect."
            />

            <section className="section">
                <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.2fr]">
                    {/* Info column */}
                    <div className="flex flex-col gap-10" data-reveal>
                        <div>
                            <p className="eyebrow mb-4">Get in Touch</p>
                            <h2 className="display-md">
                                Every great course starts with a conversation
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="hairline pt-6">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-500">
                                    Email
                                </p>
                                <a
                                    href="mailto:contact@jimfaziogolf.com"
                                    className="mt-2 inline-block font-display text-xl text-cream-50 transition-colors hover:text-brass-300"
                                >
                                    contact@jimfaziogolf.com
                                </a>
                            </div>
                            <div className="hairline pt-6">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-500">
                                    Based In
                                </p>
                                <p className="mt-2 font-display text-xl text-cream-50">
                                    Palm Beach, Florida
                                </p>
                            </div>
                            <div className="hairline pt-6">
                                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-500">
                                    Working Worldwide
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-sage-300">
                                    United States · Italy · Japan · South Korea · Bahamas ·
                                    The Grenadines
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form column */}
                    <form onSubmit={onSubmit} className="card-lux flex flex-col gap-6 p-8 md:p-10" data-reveal>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-400">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={update("name")}
                                    placeholder="Your name"
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-400">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={update("email")}
                                    placeholder="you@example.com"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                required
                                value={form.message}
                                onChange={update("message")}
                                placeholder="Tell us about your project..."
                                className={`${inputClass} resize-none`}
                            />
                        </div>
                        <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
