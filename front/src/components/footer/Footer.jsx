import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <p className="text-gray-400">Our company ....</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Leaders
                </Link>
              </li>
              <li>
                <Link
                  to="/board"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Board
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-white transition-color"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Vancouver, BC</li>
              <li>1234 Vancouver Bridge</li>
              <li>T : 987-654-3210</li>
              <li>Email : doremifa@solar.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">SNS</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 doremifa Solar System Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
