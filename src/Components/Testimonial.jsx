import React from 'react';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
  { name: "Ravi Sharma", feedback: "Excellent service, my website looks amazing!" },
  { name: "Priya Singh", feedback: "Affordable and professional web development. Highly recommend!" },
    { name: "Neha Kapoor", feedback: "The team was very responsive and delivered beyond expectations!" }, // new review
  { name: "Amit Verma", feedback: "Quick delivery and great support throughout the process." },

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
    <section className="py-15 bg-gradient-to-r from-blue-50 to-blue-100 px-6 lg:px-10">
      <motion.div
        className=" mx-auto text-center  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaQuoteLeft className="absolute -top-4 -left-4 text-blue-400 text-2xl" />
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">"{testi.feedback}"</p>
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
