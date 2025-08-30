import React, { useState } from 'react';
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

function FAQ() {
  const faqs = [
    { 
      question: "How long does it take to build a website?", 
      answer: "Typically 1-3 weeks depending on complexity and features." 
    },
    { 
      question: "Do you provide website maintenance?", 
      answer: "Yes, we offer ongoing support and maintenance packages." 
    },
    { 
      question: "Can you design a custom website?", 
      answer: "Absolutely! We specialize in custom designs tailored to your needs." 
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-5 bg-gradient-to-r from-blue-50 to-blue-100">
      <motion.div
        className="max-w-5xl mx-auto mb-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
              onClick={() => toggleFAQ(idx)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="text-blue-500 w-6 h-6" />
                </motion.div>
              </div>
              {openIndex === idx && (
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
