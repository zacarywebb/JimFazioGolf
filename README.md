# Jim Fazio Golf ⛳

A marketing site for **Jim Fazio Golf**, showcasing the work and philosophy of golf course architect Jim Fazio — 50+ courses designed across six countries, including Top 100–ranked venues.

## 🔗 Live Demo

**[zacarywebb.github.io/JimFazioGolf](https://zacarywebb.github.io/JimFazioGolf/)**

> The contact form is in demo mode on the static deployment — submissions are simulated.

## ✨ Highlights

- **Interactive 3D hero** — a drag-to-explore golf course model rendered with Three.js / React Three Fiber, with custom lighting and auto-rotation
- **Luxury design system** — Playfair Display + Inter type pairing and a deep-green / brass / cream palette built as Tailwind CSS v4 theme tokens
- **GSAP motion** — staggered hero entrance timeline and a reusable `useReveal` hook driving ScrollTrigger-based reveals across every page
- **Editorial layouts** — full-bleed page heroes, a numbered design-process timeline, offset portfolio grids, and an auto-playing crossfade gallery with keyboard navigation
- **Responsive throughout** — fluid layouts from mobile to widescreen, with an animated full-screen mobile menu
- **Performance-minded** — code-split vendor/Three.js chunks, lazy-loaded imagery, and `prefers-reduced-motion` support

## 🛠 Tech Stack

| | |
|---|---|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP 3 (ScrollTrigger, @gsap/react) |
| 3D | Three.js, React Three Fiber, drei |
| Routing | React Router 7 |
| Deployment | GitHub Pages (SPA fallback via 404 redirect) |

## 📄 Pages

- **Home** — 3D hero with stats, club-logo marquee, signature course gallery, philosophy, services, and CTA
- **About** — portfolio slideshow, notable projects, full services showcase with drone/3D-render videos, and team bios
- **Design** — design philosophy and the four-phase design process timeline
- **Contact** — split contact layout with a validated form

## 🚀 Running Locally

```bash
git clone https://github.com/zacarywebb/JimFazioGolf.git
cd JimFazioGolf
npm install
npm run dev
```

The dev server serves the site at `http://localhost:5173/JimFazioGolf/` (the base path matches the GitHub Pages deployment).

## 📁 Structure

```
src/
├── components/     # NavBar, Footer, Button, PageHero, Slideshow, 3D models...
├── sections/       # Hero, FeaturedCourses, Philosophy, DesignProcess...
├── pages/          # Home, About, Design, Contact, ThankYou
├── constants/      # Site content and data
├── hooks/          # useReveal (GSAP ScrollTrigger)
└── lib/            # asset() base-path helper
```
