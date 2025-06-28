import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Design from "./pages/Design.jsx"; // Your new page component
import NavBar from "./components/NavBar.jsx";
import About from "./pages/About.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Contact from "./pages/Contact.jsx";
import ThankYou from "./pages/ThankYou.jsx";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/design" element={<Design />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
};

export default App;
