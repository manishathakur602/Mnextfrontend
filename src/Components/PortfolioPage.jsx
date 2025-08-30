import React from 'react';
import { motion } from 'framer-motion';
import first from "../assets/Images/first.png"
import second from "../assets/Images/second.png"
import third from "../assets/Images/third.png"
import fourth from "../assets/Images/fourth.png"
import fifth from "../assets/Images/fifth.png"
import Cllsection from './Cllsection';
const portfolioImages = [
  { src: first, link: "https://digiskyfusion.com/" },
  { src: second, link: "https://digisky.ai/" },
  { src:  fourth, link: "https://astroaghoribaba.com/" },
  { src:  fifth, link: "https://www.shaadisanskar.com/" },
  { src:third , link: "https://tanishenterpriss.com/" },
];

const PortfolioPage = () => {
  return (
     <>
    <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-center">
      <h1 className="text-4xl font-extrabold text-blue-600">Our Portfolio</h1>
      <p className="mt-4 text-lg text-gray-700">Check out some of our projects.</p>

      <div className=" mx-auto mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-10">
        {portfolioImages.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img 
              src={item.src} 
              alt={`Portfolio ${idx + 1}`} 
              className="w-full h-48 object-cover"
            />
          </motion.a>
        ))}
      </div>
    
    </section>
   
        <Cllsection />
    </>
  );
};

export default PortfolioPage;
