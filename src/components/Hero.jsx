import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { images } from "../assets/image-mapping";
import Counter from "./Counter";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [randomImages, setRandomImages] = useState([]);

  const allAssets = [
    images.cards.houseNamePlate,
    images.machines.ecoSolvent,
    images.cards.digitalPrinting,
    images.cards.acrylicCutting,
    ...Object.values(images.works).slice(0, 10),
    images.machines.co2Laser,
  ];

  useEffect(() => {
    // Pick 4 random images
    const shuffled = [...allAssets].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 4));
  }, []);

  if (randomImages.length === 0) return null;

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-[80px] flex items-center overflow-hidden bg-background relative"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative">
        {/* Text Content */}
        <div className="lg:col-span-7 z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-full flex items-center gap-2">
              <Zap size={14} className="fill-primary" /> Precision Engineered
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[42px] md:text-[72px] lg:text-[84px] font-[900] text-primary leading-[1] mb-8 tracking-tighter"
          >
            High Precision <br />
            <motion.span
              animate={{
                opacity: [1, 0.6, 1],
                textShadow: [
                  "0 0 10px rgba(217,125,69,0.3)",
                  "0 0 25px rgba(217,125,69,0.6)",
                  "0 0 10px rgba(217,125,69,0.3)",
                ],
                color: ["#D97D45", "#FF8C42", "#D97D45"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="italic relative inline-block"
            >
              Laser
            </motion.span>
            <br />
            Cutting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl font-medium text-lightText/80 leading-relaxed mb-10 max-w-[600px] mx-auto lg:mx-0"
          >
            Sri Guru Sai Laser provides top-tier{" "}
            <strong>CNC laser cutting Bengaluru</strong>,{" "}
            <strong>metal fabrication</strong>, and{" "}
            <strong>stainless steel laser cutting</strong>. We transform your
            concepts into high-precision masterpieces using advanced industrial
            laser technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(83,28,179,0.3)] hover:shadow-[0_25px_50px_rgba(83,28,179,0.4)] hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              Start Project{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#services"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Play size={14} className="fill-primary ml-0.5" />
              </div>
              Our Services
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">
                <Counter value="200+" immediate={true} />
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">
                <Counter value="07+" immediate={true} />
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">
                <Counter value="100%" immediate={true} />
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                Precision Rate
              </span>
            </div>
          </motion.div>
        </div>

        {/* Visual Assets Grid */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid grid-cols-12 grid-rows-12 gap-4 h-[500px] md:h-[600px] lg:h-[700px] w-full"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-start-1 col-end-9 row-start-1 row-end-8 rounded-[40px] overflow-hidden shadow-2xl relative"
            >
              <img
                src={randomImages[0]}
                className="w-full h-full object-cover"
                alt="Laser Product"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Accent Image 1 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              whileHover={{ y: -10 }}
              className="col-start-6 col-end-13 row-start-8 row-end-13 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20"
            >
              <img
                src={randomImages[1]}
                className="w-full h-full object-cover"
                alt="Machine"
              />
            </motion.div>

            {/* Accent Image 2 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="col-start-9 col-end-13 row-start-1 row-end-5 rounded-[24px] overflow-hidden shadow-xl z-10"
            >
              <img
                src={randomImages[2]}
                className="w-full h-full object-cover"
                alt="Printing"
              />
            </motion.div>

            {/* Accent Image 3 - NEW */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="col-start-1 col-end-5 row-start-8 row-end-12 rounded-[24px] overflow-hidden shadow-xl z-10"
            >
              <img
                src={randomImages[3]}
                className="w-full h-full object-cover"
                alt="Acrylic"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
