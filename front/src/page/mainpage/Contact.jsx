import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white py-20 lg:py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 text-lg">Any Questions? </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Call",
              info: "02-1234-5678",
              subInfo: "09:00 - 18:00 Weekdays",
            },
            {
              title: "Email",
              info: "support@example.com",
              subInfo: "24 hours",
            },
            {
              title: "Location",
              info: "Vancouver, BC",
              subInfo: "1234 Vancouver Bridge",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
              <p className="text-gray-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1094.3433100869902!2d-123.11551163193505!3d49.28015459838858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717e9849da43%3A0xb9df0be6adeff97b!2sVancouver%20Public%20Library%20-%20Central%20Library!5e0!3m2!1sen!2sca!4v1748037136101!5m2!1sen!2sca"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
