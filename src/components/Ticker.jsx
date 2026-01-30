import React, { useRef } from "react";
import { motion } from "framer-motion";

const Ticker = ({ reverse = false }) => {
  const services = [
    "Laser Cutting & Engraving",
    "House Name Plates",
    "LED Sign Boards",
    "Rubber Stamps",
    "Digital Prints",
    "Fabric Banners",
    "Mug Printing",
    "Acrylic Cutting",
    "Vinyl Stickers",
    "Trophy Engraving",
  ];

  const Star = () => (
    <span className="text-secondary mx-4 md:mx-8 flex items-center shrink-0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </span>
  );

  // Use more repeats to ensure no gaps on very wide screens
  const tickerItems = [...services, ...services, ...services, ...services];

  return (
    <div className="bg-primary py-4 md:py-6 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative">
      <motion.div
        className="flex items-center"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 30, // Slightly faster speed
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {tickerItems.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white font-black text-lg md:text-3xl tracking-tight uppercase italic">
              {service}
            </span>
            <Star />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
