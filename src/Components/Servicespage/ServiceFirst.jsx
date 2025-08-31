import React from "react";
import { FaLaptopCode, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

function ServiceFirst() {
  const services = [
    { icon: <FaLaptopCode />, title: "Responsive Design", gradient: "from-blue-400 to-blue-600" },
    { icon: <FaCogs />, title: "Fast Performance", gradient: "from-green-400 to-green-600" },
    { icon: <FaUser />, title: "Creative Design", gradient: "from-pink-400 to-pink-600" },
    { icon: <FaShoppingCart />, title: "Affordable Pricing", gradient: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-r from-blue-100 to-blue-100 overflow-hidden -z-0 gilda-display-regular">
      {/* Animated background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-56 h-56 sm:w-72 sm:h-72 bg-pink-400 rounded-full opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto px-4 lg:px-10 text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">Our Services</h2>
        <p className="text-sm sm:text-lg mb-12">
          Affordable and professional website solutions to help your business grow online.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -8 }}
              className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center transition duration-300"
            >
              <div
                className={`bg-gradient-to-r ${service.gradient} text-white text-4xl sm:text-5xl p-4 sm:p-6 rounded-full mb-4 shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceFirst;
