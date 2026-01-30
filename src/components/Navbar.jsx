import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../assets/image-mapping";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "gallery", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 10; // reduced from 80
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "py-5 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "py-5 bg-background"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={(e) => scrollToSection(e, "home")}
        >
          <img
            src={images.logos.sgs}
            alt="Sri Guru Sai Laser"
            className="h-8 md:h-10 w-auto"
          />
          <p className="text-l font-bold">Sri Guru Sai Laser</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-sm font-black uppercase tracking-widest transition-all duration-300 relative hover:text-primary ${
                    activeSection === link.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="group bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-xl font-black text-xs shadow-[0_10px_20px_rgba(83,28,179,0.2)] hover:shadow-[0_15px_30px_rgba(83,28,179,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
          >
            Get a Quote
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={(e) => scrollToSection(e, "contact")}
            className="group bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-lg font-black text-[10px] shadow-lg flex items-center gap-1.5 active:scale-95"
          >
            Get a Quote
            <ArrowRight size={12} />
          </button>

          <button
            className="text-primary p-2 bg-primary/5 rounded-xl transition-colors hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-[85px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 z-[1001]"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`text-2xl font-black uppercase tracking-tighter ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-10 border-t border-gray-50">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                Contact Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919844327471"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <span className="text-sm font-bold">WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/sgslsrigurusailaser"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <Instagram size={20} className="text-[#E4405F]" />
                  <span className="text-sm font-bold">Instagram</span>
                </a>
                <a
                  href="tel:9844327471"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <Phone size={20} className="text-primary" />
                  <span className="text-sm font-bold">Call Us</span>
                </a>
                <a
                  href="mailto:srigurusailaser@gmail.com"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <Mail size={20} className="text-secondary" />
                  <span className="text-sm font-bold">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
