import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Images/MnextMainLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white relative -z-0 gilda-display-regular">
      <div className="max-w-6xl mx-auto px-4 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white rounded-full px-4 mb-4">
            <img src={logo} alt="Mnext Technology" className="w-24 sm:w-28" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Mnext Technology</h3>
          <p className="text-sm sm:text-base text-blue-100">
            Professional and affordable web solutions to help your business grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/"><li className="hover:text-blue-200 cursor-pointer transition">Home</li></Link>
            <Link to="/Mnext-/about"><li className="hover:text-blue-200 cursor-pointer transition">About</li></Link>
            <Link to="/Mnext-/services"><li className="hover:text-blue-200 cursor-pointer transition">Services</li></Link>
            <Link to="/Mnext-/portfolio"><li className="hover:text-blue-200 cursor-pointer transition">Portfolio</li></Link>
            <Link to="/Mnext-/contact"><li className="hover:text-blue-200 cursor-pointer transition">Contact</li></Link>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm sm:text-base text-blue-100 mb-4">
            Email: manishsharma5382@gmail.com <br />
            {/* Phone: +91 98765 43210 */}
          </p>
          {/* <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-200 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-200 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-200 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-200 transition"><FaLinkedinIn /></a>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-800 text-center py-4 text-sm sm:text-base text-blue-100 mt-6">
        &copy; 2025 Mnext Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
