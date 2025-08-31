import React from "react";
import { Fingerprint, Star } from "lucide-react";
import { motion } from "framer-motion";

function ThirdSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-blue-500 text-white overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]"></div>

      {/* Text Section */}
      <div className="text-center max-w-4xl relative z-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2 animate-fade-in">
          The future
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-fade-in [animation-delay:200ms]">
          of development
        </h2>

        {/* Human + Fingerprint + AI + Star (Framer Motion) */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-white">is</span>

          {/* Fingerprint (Thumb) Animation */}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Fingerprint className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-400 drop-shadow-[0_0_12px_#10B981]" />
          </motion.span>

          <motion.span
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-extrabold"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            HUMAN
          </motion.span>

          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">+</span>

          {/* Star Animation */}
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]" />
          </motion.span>

          <motion.span
            className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-extrabold"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            AI
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in [animation-delay:600ms] px-2">
          We help you map the skills you need, track the skills you have,
          and close your gaps to thrive in a GenAI world.
        </p>

        {/* Button */}
        <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 rounded-xl cursor-pointer text-base sm:text-lg font-medium bg-blue-950 text-white border border-gray-700 hover:border-emerald-400 hover:shadow-[0_0_25px_#10B981] hover:scale-105 transition-all animate-fade-in [animation-delay:800ms]">
          Join The Community
        </button>
      </div>
    </section>
  );
}

export default ThirdSection;
