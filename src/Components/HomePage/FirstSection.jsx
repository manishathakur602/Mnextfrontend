import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const avatars = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg" },
  { src: "https://randomuser.me/api/portraits/men/36.jpg" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg" },
  { src: "https://randomuser.me/api/portraits/women/22.jpg" },
  { src: "https://randomuser.me/api/portraits/men/29.jpg" },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-600 to-black text-white overflow-hidden px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        
        {/* Left Content */}
        <div className="space-y-8 relative z-20">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight"
          >
            <span className="bg-white bg-clip-text text-transparent">
              Unlock Top Marketing Talent
            </span>{" "}
            <br />
            <span className="text-white">You Thought Was Out of Reach –</span>{" "}
            <span className="bg-white bg-clip-text text-transparent">
              Now Just One Click Away!
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed"
          >
            Power your growth with{" "}
            <span className="text-yellow-300 font-semibold">20k+ verified specialists</span> 
            in marketing, design & strategy — ready to elevate your brand.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white rounded-full shadow-lg text-lg font-semibold hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all"
          >
            🚀 Start Project <ArrowRight size={22} />
          </motion.button>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-1 w-44 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300 rounded-full"
          />
        </div>

        {/* Right Side (Orbit with Rings + Avatars) */}
        <div className="relative flex items-center justify-center">
          {/* Center Text */}
          <div className="absolute text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold">10k+</h2>
            <p className="text-gray-300 text-2xl">Specialists</p>
          </div>

          {/* Orbit System */}
          <motion.div
            className="relative w-[420px] h-[420px] md:w-[500px] md:h-[500px] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {/* Orbit Rings with Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-purple-400/40 border-dashed shadow-[0_0_25px_rgba(168,85,247,0.4)] blur-[0.5px]"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-cyan-400/40 border-dashed shadow-[0_0_20px_rgba(34,211,238,0.4)] blur-[0.5px]"></div>
            <div className="absolute w-[180px] h-[180px] rounded-full border-2 border-emerald-400/40 border-dashed shadow-[0_0_15px_rgba(16,185,129,0.4)] blur-[0.5px]"></div>

            {/* Avatars placed on different orbits */}
            {avatars.map((avatar, i) => {
              const radiusOptions = [210, 150, 90]; 
              const radius = radiusOptions[i % 3]; 
              const angle = (i * 60 * Math.PI) / 180; 

              return (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] overflow-hidden hover:scale-110 transition-transform duration-300"
                  style={{
                    top: `calc(50% + ${radius * Math.sin(angle)}px - 28px)`,
                    left: `calc(50% + ${radius * Math.cos(angle)}px - 28px)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <img
                    src={avatar.src}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
