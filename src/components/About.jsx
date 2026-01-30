import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { images } from '../assets/image-mapping'
import Counter from './Counter'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Projects Done', value: '200+' },
    { label: 'Happy Clients', value: '200+' }
  ]

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-square">
              <img 
                src={images.works.img12} 
                alt="Our Workshop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Background decorative element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-100">
               <p className="text-4xl font-black text-primary leading-none">
                 <Counter value="07" />
               </p>
               <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter mt-1">Years of Craft</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-secondary"></div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm">Est. 2018</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1]">
              About Sri Guru Sai <br /><span className="text-secondary italic underline decoration-primary/20">Laser Cutting Services.</span>
            </h2>
            
            <p className="text-lg font-medium text-lightText mb-8 leading-relaxed">
              At <strong>Sri Guru Sai Laser</strong>, we've built our reputation on precision, reliability, and an unwavering commitment to quality in <strong>CNC laser cutting</strong> and <strong>custom metal fabrication</strong>. Based in Bengaluru, we serve both individuals and businesses across Karnataka with cutting-edge <strong>industrial laser cutting</strong> technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'High-Precision Cutting',
                'Fast Turnaround Time',
                'Custom Design Experts',
                'Competitive Pricing'
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-bold text-primary text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-10 pt-10 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-black text-primary mb-1">
                    <Counter value={stat.value} />
                  </p>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
