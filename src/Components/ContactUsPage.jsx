const ContactUsPage = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-3xl font-semibold text-blue-600">Contact Us</h1>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="p-2 rounded border border-gray-300" />
        <input type="email" placeholder="Your Email" className="p-2 mt-4 rounded border border-gray-300" />
        <textarea placeholder="Your Message" className="p-2 mt-4 rounded border border-gray-300"></textarea>
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUsPage;
