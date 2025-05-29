import React from "react";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "맞춤형 소프트웨어 개발",
      description: "고객의 요구사항에 맞는 최적화된 솔루션을 제공합니다.",
      icon: "💻",
    },
    {
      id: 2,
      title: "클라우드 서비스",
      description: "안정적이고 확장 가능한 클라우드 인프라 구축 및 관리",
      icon: "☁️",
    },
    {
      id: 3,
      title: "보안 솔루션",
      description: "최신 보안 기술을 적용한 안전한 시스템 구축",
      icon: "🔒",
    },
    {
      id: 4,
      title: "기술 컨설팅",
      description: "전문가의 분석을 통한 최적의 기술 전략 수립",
      icon: "📊",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-32 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600">Innovated Technology</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Over 10 years
            </h3>
            <p className="text-gray-600">Wide range of experiences</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Over 10 years
            </h3>
            <p className="text-gray-600">Experts and specialists</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Over 10 years
            </h3>
            <p className="text-gray-600">24/7 Online services</p>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Ongoing works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "요구사항 분석",
              desc: "고객의 니즈와 목표를 정확히 파악",
            },
            {
              step: "02",
              title: "설계 및 기획",
              desc: "최적의 솔루션 설계와 개발 계획 수립",
            },
            {
              step: "03",
              title: "개발 및 테스트",
              desc: "체계적인 개발과 품질 검증 진행",
            },
            {
              step: "04",
              title: "배포 및 유지보수",
              desc: "안정적인 서비스 운영과 지속적인 개선",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-md"
            >
              <div className="text-blue-600 text-5xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 bg-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start?</h2>
        <p className="text-xl mb-8">
          Talk with our specialists to find your solution
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
          Free to start
        </button>
      </div>
    </div>
  );
};

export default Services;
