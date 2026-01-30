import React from "react";
import { motion } from "framer-motion";
import { Star, Truck, DollarSign, Award, ArrowRight } from "lucide-react";
import { images } from "../assets/image-mapping";
import Counter from "./Counter";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Star className="text-secondary" size={32} />,
      title: "Premium Quality",
      description:
        "Industrial-grade materials ensuring every project meets the highest standards of durability and finish.",
    },
    {
      icon: <Truck className="text-secondary" size={32} />,
      title: "Fast Delivery",
      description:
        "High-speed machinery and optimized workflow to deliver your custom orders in record time.",
    },
    {
      icon: <DollarSign className="text-secondary" size={32} />,
      title: "Honest Pricing",
      description:
        "Competitive prices for high-quality custom manufacturing with absolutely zero hidden costs.",
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      title: "Expert Craft",
      description:
        "Years of specialized experience bringing technical precision to every complex custom design.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-secondary"></div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm">
                Our Distinction
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              Why Choose Our Laser <br />
              <span className="text-secondary">Cutting Experts in Bengaluru</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg max-w-md lg:text-right"
          >
            We combine <strong>cutting-edge industrial laser technology</strong> with artisanal attention to detail to provide precision results for all your <strong>metal fabrication</strong> needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Feature List */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="mb-6 p-4 bg-secondary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image/Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden"
          >
            <img
              src={images.works.img7}
              alt="Precision Work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="text-5xl font-black text-secondary mb-1">
                <Counter value="200+" />
              </div>
              <p className="text-lg font-bold text-white uppercase tracking-widest">
                Clients Served
              </p>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6 flex items-center gap-2 text-white/60 text-sm font-bold uppercase tracking-tighter"
              >
                Precision in Every Cut <ArrowRight size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Feature List */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="mb-6 p-4 bg-secondary/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
