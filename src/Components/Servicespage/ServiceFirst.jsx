import React from 'react'

import { FaLaptopCode, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

function ServiceFirst() {
    const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="px-2"
      >
        <div className="mx-auto text-center py-10 rounded-3xl px-6 bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg">
          <h1 className="text-4xl font-bold text-blue-600 mb-3">
            Our Services
          </h1>
          <p className="mt-2 text-lg text-gray-700 mb-4">
            Affordable and professional website solutions to help your business
            grow online.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Whether you need a portfolio, business, e-commerce, or custom
            website, we've got you covered!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="bg-white rounded-xl shadow p-4 w-36 hover:shadow-lg transition">
              <span className="text-blue-500 text-3xl mb-2 inline-block">
                💻
              </span>
              <p className="text-gray-700 font-medium">Responsive Design</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 w-36 hover:shadow-lg transition">
              <span className="text-green-500 text-3xl mb-2 inline-block">
                ⚡
              </span>
              <p className="text-gray-700 font-medium">Fast Performance</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 w-36 hover:shadow-lg transition">
              <span className="text-pink-500 text-3xl mb-2 inline-block">
                🎨
              </span>
              <p className="text-gray-700 font-medium">Creative Design</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4 w-36 hover:shadow-lg transition">
              <span className="text-yellow-500 text-3xl mb-2 inline-block">
                💰
              </span>
              <p className="text-gray-700 font-medium">Affordable Pricing</p>
            </div>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Explore Services
          </motion.button> */}
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceFirst
