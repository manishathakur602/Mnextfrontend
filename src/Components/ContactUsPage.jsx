import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

const ContactUsPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(`{uri}api/contact`, formData);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-16">
          We'd love to hear from you! Fill out the form below or reach us directly via email.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 relative">
              <FaEnvelope className="absolute left-4 top-4 text-blue-400 text-lg" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div className="mb-6 relative">
              <FaEnvelope className="absolute left-4 top-4 text-blue-400 text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-300 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-2xl space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold text-blue-700">Get in Touch</h2>
            <p className="text-gray-700">You can also reach us directly via email:</p>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a
                href="mailto:manishsharma5382@gmail.com"
                className="text-blue-700 font-semibold hover:underline"
              >
                manishsharma5382@gmail.com
              </a>
            </div>

            <p className="text-gray-500 mt-6">
              We'll respond as soon as possible. Thank you for reaching out!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
