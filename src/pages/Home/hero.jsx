import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-8">
      <div
        className="relative rounded-3xl overflow-hidden h-[520px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transform Your Space With <br /> Professional Decorators
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Create beautiful, personalized environments with our expert team of
            high-end decorators.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="px-8 py-3 rounded-full bg-purple-500 text-white font-medium text-[16px] hover:bg-purple-600 transition shadow-lg"
            >
              Book Decoration Service
            </Link>

            <Link
              to="/packages"
              className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium text-[16px] hover:bg-gray-200 transition shadow-md"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
