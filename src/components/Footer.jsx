import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "../assets/image-mapping";
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1200px] mx-auto px-4 md:px-2 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={images.logos.sgs}
              alt="Sri Guru Sai Laser"
              className="h-8 md:h-10 w-auto"
            />
            <p className="text-l font-bold">Sri Guru Sai Laser</p>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Leading the way in high-precision laser cutting solutions. Crafting
            excellence with technology and dedication.
          </p>
          <div className="flex gap-4">
            {[
              {
                Icon: MessageCircle,
                label: "WhatsApp",
                color: "#25D366",
                href: "https://wa.me/919844327471",
              },
              {
                Icon: Instagram,
                label: "Instagram",
                color: "#E4405F",
                href: "https://www.instagram.com/sgslsrigurusailaser",
              },
              {
                Icon: Phone,
                label: "Call Us",
                color: "#D97D45",
                href: "tel:9844327471",
              },
              {
                Icon: Mail,
                label: "Email Us",
                color: "#92745a",
                href: "mailto:srigurusailaser@gmail.com",
              },
            ].map(({ Icon, label, color, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ color: color }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-6">Quick Navigation</h3>
          <ul className="space-y-4 text-gray-400">
            {["home", "about", "services", "gallery", "contact"].map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className="hover:text-secondary transition-colors capitalize flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"></span>
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-6">Legal & Support</h3>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link
                to="/privacy"
                className="hover:text-secondary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"></span>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-secondary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"></span>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection("contact")}
                className="hover:text-secondary transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-4 transition-all duration-300"></span>
                Help Center
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
          <a
            href="https://maps.app.goo.gl/cCTh87UEYHvz3ePd6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-gray-400 hover:text-secondary transition-colors group"
          >
            <MapPin
              size={20}
              className="text-secondary shrink-0 mt-1 group-hover:scale-110 transition-transform"
            />
            <p>#02 Narmada Layout, Kithiganur Main road, Bengaluru</p>
          </a>
          <a
            href="tel:9844327471"
            className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors group"
          >
            <Phone
              size={20}
              className="text-secondary shrink-0 group-hover:scale-110 transition-transform"
            />
            <p>9844327471</p>
          </a>
          <a
            href="mailto:srigurusailaser@gmail.com"
            className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors group"
          >
            <Mail
              size={20}
              className="text-secondary shrink-0 group-hover:scale-110 transition-transform"
            />
            <p>srigurusailaser@gmail.com</p>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-gray-400 text-sm"
      >
        <p>&copy; {currentYear} Sri Guru Sai Laser. All rights reserved.</p>
        <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="text-xs uppercase tracking-tighter text-gray-200">
            Designed and developed by
          </span>
          <div className="flex items-center gap-1 ">
            <img
              src={images.logos.cortex}
              alt="Cortex IT"
              className="h-6 w-auto"
            />
            <span className="font-black tracking-tighter text-white">
              CORTEX™ IT
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
