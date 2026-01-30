import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <WhyChooseUs />
      <Ticker reverse />
      <Gallery />
      <Clients />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
