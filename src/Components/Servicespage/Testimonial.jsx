import React from 'react';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    { name: "Ravi Sharma", feedback: "Excellent service, my website looks amazing!" },
    { name: "Priya Singh", feedback: "Affordable and professional web development. Highly recommend!" },
    { name: "Neha Kapoor", feedback: "The team was very responsive and delivered beyond expectations!" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 px-4 lg:px-10 gilda-display-regular relative overflow-hidden -z-0">
      
      {/* Optional background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>

      <motion.div
        className="mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaQuoteLeft className="absolute -top-4 -left-4 text-blue-400 text-2xl" />
              <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">"{testi.feedback}"</p>
              <FaQuoteRight className="absolute -bottom-4 -right-4 text-blue-400 text-2xl" />
              <p className="font-semibold text-gray-800 mt-6">{testi.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonial;
