import React from "react";
import { FaLaptopCode, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import Cards from "./Servicespage/Cards";
import Process from "./Servicespage/Process";
import Testimonial from "./Servicespage/Testimonial";
import Cllsection from "./Servicespage/Cllsection";
import ServiceFirst from "./Servicespage/ServiceFirst";


const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  return (
    <section className="bg-gray-50 mt-5 p">
      {/* Header */}
     

      {/* Services Cards */}
      <motion.div
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <ServiceFirst />
        <Cards />
        <Process />
      <Testimonial />
      {/* <FAQ /> */}

      <Cllsection />
      </motion.div>
      
    </section>
  );
};

export default ServicesPage;
