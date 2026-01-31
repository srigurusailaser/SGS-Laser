import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Send,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS early for faster response on click
emailjs.init("Pboj02MavnbED_jGw");

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = React.useState({ type: "", message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Strict validation for speed and data integrity
    const phoneRegex = /^[0-9]{10}$/;
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "All fields are required." });
      setLoading(false);
      return;
    }

    if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ""))) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        user_email: formData.email,
        message: formData.message,
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
      };

      // Send both admin inquiry and auto-reply simultaneously for better performance
      const [adminResult, autoReplyResult] = await Promise.all([
        emailjs.send(
          "service_oxy7n08",
          "template_m49l2ga", // ADMIN_TEMPLATE_ID
          templateParams,
        ),
        emailjs.send(
          "service_oxy7n08",
          "template_dqrwz08", // AUTO_REPLY_TEMPLATE_ID
          templateParams, //error fixed
        ),
      ]);

      if (adminResult.status === 200 || autoReplyResult.status === 200) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! Check your email for confirmation.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-2.5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-secondary"></div>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm">
                Get in touch
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1]">
              Contact Bengaluru's{" "}
              <span className="text-secondary italic">
                Top Laser Cutting Service.
              </span>
            </h2>
            <p className="text-lg font-medium text-lightText mb-12 leading-relaxed">
              Whether you need <strong>industrial laser cutting</strong>,{" "}
              <strong>custom metal fabrication</strong>, or{" "}
              <strong>CNC engraving</strong> in Bengaluru, we're here to help
              you achieve absolute precision.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919844327471"
                aria-label="Chat on WhatsApp"
                className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-2 transition-all"
              >
                <MessageCircle size={28} fill="currentColor" />
              </a>
              <a
                href="https://www.instagram.com/sgslsrigurusailaser"
                aria-label="Follow us on Instagram"
                className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-2 transition-all"
              >
                <Instagram size={28} />
              </a>
              <a
                href="tel:9844327471"
                aria-label="Call Us"
                className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-2 transition-all"
              >
                <Phone size={28} />
              </a>
              <a
                href="mailto:info@sgslaser.in"
                aria-label="Email Us"
                className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-2 transition-all"
              >
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-primary p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="name"
                      className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all font-bold text-white placeholder:text-white/20"
                      placeholder="Enter your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="email"
                      className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all font-bold text-white placeholder:text-white/20"
                      placeholder="email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="phone"
                      className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all font-bold text-white placeholder:text-white/20"
                      placeholder="+91 ..."
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="service"
                      className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all font-bold text-white appearance-none cursor-pointer"
                    >
                      <option value="" className="text-primary">
                        Select Service
                      </option>
                      <option value="laser" className="text-primary">
                        Laser Cutting
                      </option>
                      <option value="engraving" className="text-primary">
                        Engraving
                      </option>
                      <option value="printing" className="text-primary">
                        Printing
                      </option>
                      <option value="signage" className="text-primary">
                        Signage
                      </option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label
                    htmlFor="message"
                    className="text-[10px] font-black text-white/50 uppercase tracking-widest ml-1"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 bg-white/10 border border-white/10 rounded-2xl focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all font-bold text-white placeholder:text-white/20 resize-none"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </motion.div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl font-black text-center text-sm ${status.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-primary py-6 rounded-2xl font-black text-xl shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
                >
                  {loading ? "Processing..." : "Send Inquiry"}
                  <Send
                    size={22}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
