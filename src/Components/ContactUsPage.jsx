import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots, FaHeadset, FaClock } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactUsPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Determine if office is open
  const hours = currentTime.getHours();
  const isOpen = hours >= 9 && hours < 20;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await axios.post(`${API_URL}api/contact`, formData);
      if (response.data.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { id: toastId });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Format current time
  const formatTime = (date) => {
    return date.toLocaleTimeString(); // shows HH:MM:SS AM/PM
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 gilda-display-regular">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-4">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-gray-700 text-center mb-12 sm:mb-16">
          We'd love to hear from you! Fill out the form below or reach us directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 sm:mb-6 relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg sm:text-xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 sm:py-4 pl-10 sm:pl-12 rounded-lg sm:rounded-xl border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
                required
              />
            </div>

            <div className="mb-5 sm:mb-6 relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg sm:text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 sm:py-4 pl-10 sm:pl-12 rounded-lg sm:rounded-xl border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm sm:text-base"
                required
              />
            </div>

            <div className="mb-5 sm:mb-6 relative">
              <FaCommentDots className="absolute left-3 top-4 text-blue-400 text-lg sm:text-xl" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-lg sm:rounded-xl border border-gray-300 
                           h-32 sm:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 
                           transition text-sm sm:text-base"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 bg-blue-700 text-white font-bold rounded-lg sm:rounded-xl 
                         hover:bg-blue-800 disabled:opacity-70 transition-all text-sm sm:text-base cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"} 
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700">Get in Touch</h2>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <FaEnvelope className="text-blue-600 text-lg sm:text-xl" />
              <a
                href="mailto:manishsharma5382@gmail.com"
                className="text-blue-700 font-semibold hover:underline text-sm sm:text-base"
              >
                manishsharma5382@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <FaHeadset className="text-purple-600 text-lg sm:text-xl" />
              <p className=" text-sm sm:text-base">24×7 Customer Support</p>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <FaClock className="text-yellow-600 text-lg sm:text-xl" />
              <p className="text-sm sm:text-base">
                Office Hours: Mon – Sat: 9:00 AM – 8:00 PM (
                <span className={isOpen ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
                  {isOpen ? "Open" : "Closed"}
                </span>
                ) <br />
                Current Time: <span className="font-semibold">{formatTime(currentTime)}</span>
              </p>
            </div>

            <p className=" text-sm sm:text-base mt-4 sm:mt-6">
              We'll respond as soon as possible. Thank you for reaching out!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
