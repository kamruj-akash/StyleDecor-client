import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7f7fc] relative overflow-hidden px-6">
      {/* Soft gradient backgrounds */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/3"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">
        {/* Image */}
        <img
          src="https://cdn.dribbble.com/userupload/15399649/file/original-b5ddccc7435822513478f8392661bbcf.png?resize=1200x900"
          alt="Error Illustration"
          className="w-full rounded-3xl mb-10"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Oops, something went wrong.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-purple-500 text-white font-medium text-[16px] shadow-lg hover:bg-purple-600 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
