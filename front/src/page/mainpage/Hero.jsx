import React from "react";
import HeroImage from "../../assets/Image1.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-6 lg:mb-12">
              Solar System Infrastructure
              <span className="block text-blue-600 mt-2 lg:mt-6">
                To Make better Future
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 text-semibold mb-8 max-w-2xl mx-auto">
              Secure and efficient solar system installation build with experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                Contact
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300 text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div className="relative">
              <img
                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
                src={HeroImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "1,200 +", label: "Install done" },
            { number: "98%", label: "Customer Satisfaction" },
            { number: "15 Years +", label: "Industry Experience" },
            { number: "27/7", label: "Technical Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {stat.number}
              </div>
              <div className="text-green-900">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
