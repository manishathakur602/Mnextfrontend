const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-700">
            Welcome to <span className="text-indigo-600">Mnext Technology</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We build the future of technology with precision and innovation.
            Empowering businesses with cutting-edge solutions.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700">Our Services</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-600">Web Development</h3>
              <p className="mt-3 text-gray-600">
                Build modern, scalable, and responsive websites tailored to your needs.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-600">Mobile Apps</h3>
              <p className="mt-3 text-gray-600">
                Create intuitive mobile apps for Android & iOS with seamless performance.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-600">Cloud Solutions</h3>
              <p className="mt-3 text-gray-600">
                Scalable and secure cloud-based applications for global businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6 md:flex items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-700">About Us</h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At <span className="font-semibold">Mnext Technology</span>, we are
              passionate about delivering innovative digital solutions. Our team
              of experts ensures top-quality services in web development, mobile
              applications, and cloud technologies.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://source.unsplash.com/500x350/?technology,team"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700">Our Work</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <img
              src="https://source.unsplash.com/400x300/?website"
              alt="Project 1"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
            <img
              src="https://source.unsplash.com/400x300/?app,design"
              alt="Project 2"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
            <img
              src="https://source.unsplash.com/400x300/?cloud,technology"
              alt="Project 3"
              className="rounded-2xl shadow-lg hover:scale-105 transition"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700">What Our Clients Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-600">
                "Mnext Technology helped us transform our business with a
                powerful website. Highly professional team!"
              </p>
              <h4 className="mt-4 font-bold text-blue-600">- Sarah, CEO</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-600">
                "Their mobile app development exceeded expectations. Smooth and
                reliable service."
              </p>
              <h4 className="mt-4 font-bold text-blue-600">- John, Startup Founder</h4>
            </div>
          </div>
        </div>
      </section>

    

     
    </div>
  );
};

export default HomePage;
