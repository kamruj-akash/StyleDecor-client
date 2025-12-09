import { Circle, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-8 border-t border-gray-200 mt-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2">
            <Circle className="text-purple-500 w-6 h-6" fill="#8b5cf6" />
            <span className="text-xl font-semibold text-gray-900">
              StyleDecor
            </span>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Premium decoration services for modern living.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Company</h3>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>
              <Link to="/about" className="hover:text-purple-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-purple-500 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:text-purple-500 transition">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Services</h3>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>
              <Link
                to="/residential"
                className="hover:text-purple-500 transition"
              >
                Residential
              </Link>
            </li>
            <li>
              <Link
                to="/corporate"
                className="hover:text-purple-500 transition"
              >
                Corporate
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-purple-500 transition">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Support</h3>

          <ul className="mt-4 space-y-3 text-gray-600">
            <li>
              <Link to="/contact" className="hover:text-purple-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-purple-500 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-purple-500 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-600">
        © 2024 StyleDecor. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
