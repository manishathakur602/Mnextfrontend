import React from 'react'

function Cards() {
  const services = [
    {
      title: "Portfolio Website",
      description:
        "Showcase your skills, achievements, and work with a professional portfolio website. Perfect for freelancers, students, and professionals.",
      price: "₹7,000 - ₹12,000",
      features: ["Responsive design", "1-5 pages", "Contact form", "Social media integration"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Sell your products online with a full-featured e-commerce website. Includes product catalog, cart, and payment integration.",
      price: "₹30,000 - ₹60,000", // highly increased
      features: ["Responsive & mobile-friendly", "Product management", "Secure payment gateway", "Order tracking"],
    },
    {
      title: "Business / Normal Website",
      description:
        "Ideal for startups and small businesses to display services, team info, and contact details.",
      price: "₹10,000 - ₹18,000",
      features: ["Responsive design", "About & Contact pages", "Service listing", "SEO-friendly layout"],
    },
    {
      title: "Custom Website",
      description:
        "Tailored websites based on your unique idea, design preferences, and advanced functionality requirements.",
      price: "₹20,000 onwards",
      features: ["Custom design", "Advanced functionality", "Third-party integration", "Ongoing support"],
    },
  ];

  return (
    <>
      {/* Services Cards */}
      <div className="lg:px-10 mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 mb-15">
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
            <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards
