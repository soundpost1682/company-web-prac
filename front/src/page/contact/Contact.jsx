import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "in progress",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );
      if (response.status === 201) {
        alert("QA upload success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          status: "in progress",
        });
      }
    } catch (error) {
      console.log("error!", error);
      alert("error in QA. Please wait and submit again later");
    }
  };
  return (
    <div className="min-h-screen bg-white py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact Solar System 24/7
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form
              className="bg-white rounded-2xl shadow-xl p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="ex@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                    placeholder="123-456-7890"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Content
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    className="w-full p-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 h-40"
                    placeholder="Write your story"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "phone",
                    title: "전화",
                    info: "02-1234-5678",
                    desc: "평일 09:00 - 18:00",
                  },
                  {
                    icon: "envelope",
                    title: "이메일",
                    info: "support@example.com",
                    desc: "24시간 접수 가능",
                  },
                  {
                    icon: "map-marker-alt",
                    title: "주소",
                    info: "서울특별시 강남구 삼성동 123번지",
                    desc: "본사",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
