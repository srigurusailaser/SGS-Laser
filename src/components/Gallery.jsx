import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Plus } from "lucide-react";
import { images } from "../assets/image-mapping";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const productImages = Object.values(images.works);

  const machineryImages = Object.values(images.machines);

  const currentImages =
    activeTab === "products" ? productImages : machineryImages;
  const visibleImages = showAll ? currentImages : currentImages.slice(0, 12);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <div className="h-px w-8 bg-secondary"></div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-primary leading-tight"
            >
              Laser Cutting{" "}
              <span className="text-secondary italic">Gallery</span>
            </motion.h2>
          </div>

          <div className="flex bg-gray-100 p-2 rounded-3xl">
            <button
              onClick={() => {
                setActiveTab("products");
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${activeTab === "products" ? "bg-white text-primary shadow-md" : "text-gray-900 hover:text-primary"}`}
            >
              Our Creations
            </button>
            <button
              onClick={() => {
                setActiveTab("machinery");
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${activeTab === "machinery" ? "bg-white text-primary shadow-md" : "text-gray-900 hover:text-primary"}`}
            >
              The Tech
            </button>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-square overflow-hidden rounded-[32px] shadow-sm cursor-zoom-in bg-gray-50 border border-gray-100"
              >
                <img
                  src={img}
                  alt={`Sri Guru Sai Laser ${activeTab} - Precision Laser Cutting Bengaluru project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && currentImages.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto group"
            >
              Load More{" "}
              <Plus
                size={20}
                className="group-hover:rotate-90 transition-transform"
              />
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            />
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <span className="text-4xl font-thin">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
