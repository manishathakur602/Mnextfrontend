import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";

function Process() {
  const processSteps = [
    {
      step: "Consultation",
      desc: "We understand your needs and goals to plan the perfect website.",
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
    },
    {
      step: "Design",
      desc: "Creative and responsive design mockups are made for approval.",
      icon: <FaUser className="text-pink-500 text-2xl" />,
    },
    {
      step: "Development",
      desc: "We build a fully functional website using the latest technologies.",
      icon: <FaCogs className="text-green-500 text-2xl" />,
    },
    {
      step: "Launch & Support",
      desc: "Website goes live with ongoing support and maintenance if needed.",
      icon: <FaShoppingCart className="text-yellow-500 text-2xl" />,
    },
  ];

  return (
    <section className="relative py-14 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-0 gilda-display-regular">
      <div className=" mx-auto px-4 lg:px-10">
        {/* Heading */}
     <h2 className=" text-xl sm:text-5xl font-bold text-center mb-16 relative">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
    From Concept to Launch
  </span>
  <span className="block text-gray-700 text-xl sm:text-2xl mt-2">
    Our Workflow
  </span>
  <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2"></span>
</h2>





        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                {/* Number + Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-900 text-white text-lg font-bold shadow-md mb-4">
                  {index + 1}
                </div>
                <div className="mb-3">{step.icon}</div>

                {/* Title + Desc */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.step}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
