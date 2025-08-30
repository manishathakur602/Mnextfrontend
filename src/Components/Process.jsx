import React from 'react'
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";
function Process() {
     const processSteps = [
    { step: "1. Consultation", desc: "We understand your needs and goals to plan the perfect website.", icon: <FaLaptopCode className="mx-auto text-blue-600 text-3xl mb-3" /> },
    { step: "2. Design", desc: "Creative and responsive design mockups are made for approval.", icon: <FaUser className="mx-auto text-pink-500 text-3xl mb-3" /> },
    { step: "3. Development", desc: "We build a fully functional website using the latest technologies.", icon: <FaCogs className="mx-auto text-green-500 text-3xl mb-3" /> },
    { step: "4. Launch & Support", desc: "Website goes live with ongoing support and maintenance if needed.", icon: <FaShoppingCart className="mx-auto text-yellow-500 text-3xl mb-3" /> },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };
  return (
    <div>
      {/* Process Overview */}
      <motion.div
        className="mx-auto mb-20 px-4 lg:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Process</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              {step.icon}
              <h3 className="font-semibold text-xl mb-3">{step.step}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Process
