import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { optimizeCloudinaryUrl } from "../utils/image-optimizer";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch('/api/clients');
        if (res.ok) {
          const data = await res.json();
          setClients(data);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (loading || clients.length === 0) {
    return null;
  }

  // If there are 4 or fewer clients, display them statically and centered (no duplication)
  const isStatic = clients.length <= 4;

  // Duplicate logos array exactly once to guarantee smooth seamless marquee animation
  const marqueeLogos = [...clients, ...clients];

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

      {isStatic ? (
        // Static Centered Display (no repetitions)
        <div className="flex justify-center items-center gap-12 md:gap-16 px-8 flex-wrap">
          {clients.map((client) => (
            <motion.div
              key={client._id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-shrink-0 hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={optimizeCloudinaryUrl(client.logoUrl, { height: 64, crop: 'limit' })}
                alt={client.name || `Client Logo`}
                className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                height="64"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        // Infinite Marquee Display (with increased speed - 15 seconds)
        <div className="flex h-[80px] md:h-[100px] items-center whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-12 md:gap-16 px-8"
          >
            {marqueeLogos.map((client, index) => (
              <div
                key={client._id ? `${client._id}-${index}` : index}
                className="flex-shrink-0 hover:grayscale-0 transition-all duration-500"
              >
                <img
                  src={optimizeCloudinaryUrl(client.logoUrl, { height: 64, crop: 'limit' })}
                  alt={client.name || `Client Logo`}
                  className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  height="64"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Clients;
