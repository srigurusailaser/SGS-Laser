import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { images } from "../assets/image-mapping";
import { optimizeCloudinaryUrl } from "../utils/image-optimizer";
import { apiFetch } from "../utils/api";

const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await apiFetch('/api/services');
        if (res.ok) {
          const data = await res.json();
          setServices(data);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Determine which services to show
  const visibleServices = showMore ? services : services.slice(0, 6);

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
            {visibleServices.map((service, index) => (
              <motion.div
                key={service._id || service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all group flex flex-col h-full border border-gray-100"
              >
                <div className="h-[280px] overflow-hidden relative bg-gray-100">
                  <img
                    src={optimizeCloudinaryUrl(service.image, { width: 400, height: 300 })}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width="400"
                    height="300"
                    loading="lazy"
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

        {!showMore && services.length > 6 && (
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
