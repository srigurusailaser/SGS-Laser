import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/image-mapping";

const Clients = () => {
  const clients = Object.values(images.clients);

  // Double for seamless marquee
  const marqueeLogos = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black text-primary uppercase tracking-[0.2em]"
        >
          Trusted By
        </motion.h2>
      </div>

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-12 md:gap-16 px-8"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={logo}
                alt={`Client Logo`}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
