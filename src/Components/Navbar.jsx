import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Websitelogo from "../assets/Images/MnextMainLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/Mnext-/about", label: "About" },
    { path: "/Mnext-/services", label: "Services" },
    { path: "/Mnext-/portfolio", label: "Portfolio" },
    { path: "/Mnext-/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gradient-to-r from-white via-gray-100 to-blue-50 p-4 text-gray-800 shadow-lg sm:px-5 lg:px-10 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img 
            src={Websitelogo} 
            alt="Logo" 
            className="h-14 sm:h-20 w-auto  object-cover" 
          /> 
        </NavLink>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) =>
                  `relative transition duration-300 hover:text-blue-500 
                  ${isActive ? "text-blue-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-blue-600 after:animate-pulse" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger / Cross Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-7 h-7 transition-transform duration-300 hover:rotate-90" />
          ) : (
            <FiMenu className="w-7 h-7 transition-transform duration-300 hover:scale-125" />
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        } overflow-hidden`}
      >
        <ul className="mt-4 space-y-4 text-center text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 transition duration-300 hover:text-blue-500
                  ${isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
