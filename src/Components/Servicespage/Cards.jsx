import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaStore, FaGlobe, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cards() {
  const services = [
    {
      title: "Portfolio Website",
      description:
        "Showcase your skills, achievements, and projects with a modern, professional portfolio website.",
      price: "₹7,000 – ₹12,000",
      features: [
        "Responsive design",
        "1-5 pages",
        "Contact form",
        "Social media integration",
      ],
      icon: <FaBriefcase className="text-4xl text-blue-600" />,
    },

    {
      title: "Business Website",
      description:
        "Perfect for startups and small businesses to showcase services, team, and contact details.",
      price: "₹10,000 – ₹18,000",
      features: [
        "Responsive design",
        "About & Contact pages",
        "Service listing",
        "SEO-friendly",
      ],
      icon: <FaGlobe className="text-4xl text-green-600" />,
    },

    {
      title: "Custom Website",
      description:
        "Tailored websites built from scratch based on your unique idea, with advanced functionality & integrations.",
      price: "₹40,000 onwards",
      features: [
        "Custom design",
        "Advanced features",
        "API integrations",
        "Ongoing support",
      ],
      icon: <FaCogs className="text-4xl text-purple-600" />,
    },
    {
      title: "E-Commerce Website",
      description:
        "Sell your products online with a feature-rich e-commerce platform including payments and order tracking.",
      price: "₹50,000 onwards",
      features: [
        "Mobile-friendly",
        "Product management",
        "Secure payments",
        "Order tracking",
      ],
      icon: <FaStore className="text-4xl text-pink-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className=" mx-auto px-4 lg:px-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-12">
          Our Services
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-start border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-3 text-sm">
                {service.description}
              </p>

              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Starting from {service.price}
              </span>

              <ul className="text-gray-600 text-sm mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/Mnext-/contact"
                className="mt-auto w-full bg-gradient-to-r from-blue-600 to-gray-800 cursor-pointer text-center text-white font-medium py-2 rounded-xl shadow-md hover:opacity-95 transition"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
