import React from 'react'
import { motion } from "framer-motion";

function Cllsection() {
  return (
    <div>
        {/* Call to Action */}
      <motion.div
        className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-t-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to start your website?</h2>
        <p className="mb-6">Contact us today and get your professional website at an affordable price!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white cursor-pointer text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Cllsection
