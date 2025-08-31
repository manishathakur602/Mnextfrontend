import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialCarousel() {
  const testimonials = [
    { name: "Ravi Sharma", feedback: "Excellent service, my website looks amazing!" },
    { name: "Priya Singh", feedback: "Affordable and professional web development. Highly recommend!" },
    { name: "Neha Kapoor", feedback: "The team was very responsive and delivered beyond expectations!" },
    { name: "Amit Verma", feedback: "Quick delivery and great support throughout the process." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // large screens
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablets
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // mobile
    ],
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-indigo-500 cursor-pointer"></div>
    ),
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 via-white to-blue-100">
      <div className="max-w-5xl mx-auto text-center mb-5">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Trusted by our clients, delivering exceptional web experiences.
        </p>
      </div>

      <Slider {...settings} className="max-w-7xl mx-auto">
        {testimonials.map((testi, idx) => (
          <div key={idx} className="px-3 sm:px-4  py-2 sm:py-5">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 flex flex-col items-center text-center">
              
              <FaQuoteLeft className="text-indigo-500 text-3xl sm:text-4xl mb-4 sm:mb-6" />

              <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
                {testi.feedback}
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-200 flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2">
                  {testi.name.split(" ").map(n => n[0]).join("")}
                </div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{testi.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialCarousel;
