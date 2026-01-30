import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { images } from "../assets/image-mapping";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const initialServices = [
    {
      title: "Laser Cut House Name Plates",
      description:
        "Custom name plates made from high-quality acrylic, titanium, or stainless steel for Bengaluru homes and offices.",
      image: images.cards.houseNamePlate,
      category: "Laser",
    },
    {
      title: "Industrial Rubber Stamps",
      description:
        "Personalized rubber stamps designed for clear, long-lasting impressions, perfect for corporate branding.",
      image: images.cards.rubberStamp,
      category: "Branding",
    },
    {
      title: "Custom Fabric Banners",
      description:
        "High-quality fabric banners and signage laser cutting that are durable and ideal for promotions in Bengaluru.",
      image: images.cards.fabricBanner,
      category: "Printing",
    },
    {
      title: "LED Acrylic Sign Boards",
      description:
        "Bright and durable LED sign boards using precision acrylic laser cutting to showcase your brand effectively.",
      image: images.cards.ledSignBoard,
      category: "Signage",
    },
    {
      title: "High-Res Digital Prints",
      description:
        "Sharp, vibrant digital prints suited for posters, flyers, and premium industrial printing needs.",
      image: images.cards.digitalPrinting,
      category: "Printing",
    },
    {
      title: "Custom Mug Printing",
      description:
        "Precision-printed mugs with your custom laser-inspired design or logo, perfect for corporate gifts.",
      image: images.cards.mugPrinting,
      category: "Gifts",
    },
  ];

  const additionalServices = [
    {
      title: "Precision Acrylic Cutting",
      description:
        "Expert acrylic laser cutting Bengaluru for custom shapes, industrial components, and creative designs.",
      image: images.cards.acrylicCutting,
      category: "Industrial",
    },
    {
      title: "Premium Vinyl Stickers",
      description:
        "High-quality vinyl stickers for industrial branding, vehicle graphics, and Bengaluru-wide promotions.",
      image: images.cards.vinylStickers,
      category: "Branding",
    },
    {
      title: "Corporate Trophy Engraving",
      description:
        "Professional laser engraving Bengaluru for trophies, awards, and personalized corporate recognition.",
      image: images.cards.trophyEngraving,
      category: "Laser",
    },
  ];

  const allServices = [
    ...initialServices,
    ...(showMore ? additionalServices : []),
  ];

  return (
    <section id="services" className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm">
                Capabilities
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-primary leading-tight"
            >
              Our Specialized Laser <br />
              <span className="text-secondary italic">
                Cutting & Fabrication Services
              </span>
            </motion.h2>
          </div>
          <p className="text-lightText font-medium text-lg max-w-[400px] md:text-right">
            From <strong>industrial laser cutting</strong> in Bengaluru to
            personalized gifts, we deliver excellence in{" "}
            <strong>CNC metal fabrication</strong> and custom signs.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100"
              >
                <div className="h-[280px] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lightText font-medium leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowMore(true)}
              className="bg-primary text-white px-12 py-5 rounded-full font-black text-xl shadow-[0_10px_30px_rgba(83,28,179,0.3)] hover:shadow-[0_15px_40px_rgba(83,28,179,0.4)] hover:-translate-y-1 transition-all active:scale-95"
            >
              Explore More Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
