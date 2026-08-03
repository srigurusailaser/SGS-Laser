import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Lazy load pages and sections
const Hero = lazy(() => import("./components/Hero"));
const Ticker = lazy(() => import("./components/Ticker"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const Clients = lazy(() => import("./components/Clients"));
const Contact = lazy(() => import("./components/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const AdminLogin = lazy(() => import("./admin/pages/Login"));
const ManageHero = lazy(() => import("./admin/pages/ManageHero"));
const ManageServices = lazy(() => import("./admin/pages/ManageServices"));
const ManageGallery = lazy(() => import("./admin/pages/ManageGallery"));
const ManageClients = lazy(() => import("./admin/pages/ManageClients"));

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-20" />}>
        <Ticker />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-[800px]" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="h-20" />}>
        <Ticker reverse />
      </Suspense>
      <Suspense fallback={<div className="min-h-[800px]" />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <Contact />
      </Suspense>
    </main>
    <Footer />
    <BackToTop />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Toaster position="top-center" />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/hero" replace />} />
              <Route path="hero" element={<ManageHero />} />
              <Route path="services" element={<ManageServices />} />
              <Route path="gallery" element={<ManageGallery />} />
              <Route path="clients" element={<ManageClients />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
