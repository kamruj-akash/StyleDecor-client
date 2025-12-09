const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Us
            </span>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              We Create Beautiful & Meaningful Experiences
            </h1>

            <p className="text-gray-500 mt-5 leading-relaxed">
              At Career Bridge Solutions, we specialize in delivering elegant,
              creative, and customized decoration and event solutions. Our
              mission is to turn your special moments into unforgettable
              memories with thoughtful design, flawless execution, and
              professional service.
            </p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              From weddings and corporate events to home styling and themed
              celebrations, our team blends creativity with precision to bring
              your vision to life.
            </p>
          </div>

          <div className="w-full h-[360px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Happy Clients", value: "1,200+" },
            { label: "Events Completed", value: "950+" },
            { label: "Team Members", value: "45+" },
            { label: "Years of Experience", value: "8+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-purple-600">
                {item.value}
              </h3>
              <p className="text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Our mission is to deliver outstanding decoration and event
              solutions that combine creativity, innovation, and quality. We
              aim to provide seamless experiences that exceed expectations and
              create lasting impressions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-500 leading-relaxed">
              To become a trusted and leading name in event styling and creative
              décor solutions by continuously evolving our design standards,
              technology, and customer experience.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Career Bridge Solutions?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Creative Expertise",
                desc: "Unique, modern & elegant designs tailored for every client.",
              },
              {
                title: "Professional Team",
                desc: "Experienced designers and planners for flawless execution.",
              },
              {
                title: "Premium Quality",
                desc: "High-quality materials with attention to every detail.",
              },
              {
                title: "Client Satisfaction",
                desc: "We prioritize your happiness above everything else.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-500 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Let’s Create Something Amazing Together
          </h2>
          <p className="mt-3 text-purple-100">
            Contact us today and let us transform your vision into reality.
          </p>

          <button className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
