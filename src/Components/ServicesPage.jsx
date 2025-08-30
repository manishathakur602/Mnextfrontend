import React from "react";

const ServicesPage = () => {
  const services = [
    {
      title: "Portfolio Website",
      description:
        "Showcase your skills, achievements, and work with a professional portfolio website. Perfect for freelancers, students, and professionals.",
      price: "₹3,000 - ₹5,000",
      features: ["Responsive design", "1-5 pages", "Contact form", "Social media integration"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Sell your products online with a full-featured e-commerce website. Includes product catalog, cart, and payment integration.",
      price: "₹8,000 - ₹15,000",
      features: ["Responsive & mobile-friendly", "Product management", "Secure payment gateway", "Order tracking"],
    },
    {
      title: "Business / Normal Website",
      description:
        "Ideal for startups and small businesses to display services, team info, and contact details.",
      price: "₹5,000 - ₹8,000",
      features: ["Responsive design", "About & Contact pages", "Service listing", "SEO-friendly layout"],
    },
    {
      title: "Custom Website",
      description:
        "Tailored websites based on your unique idea, design preferences, and advanced functionality requirements.",
      price: "₹10,000 onwards",
      features: ["Custom design", "Advanced functionality", "Third-party integration", "Ongoing support"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
        <p className="mt-4 text-lg text-gray-700">
          We offer a variety of website solutions at affordable prices.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="font-bold text-gray-800 mb-4">Starting from: {service.price}</p>
            <ul className="text-gray-600 text-left mb-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
