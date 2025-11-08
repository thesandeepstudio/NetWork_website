import React from "react";

const categories = [
  {
    name: "Web Development",
    icon: "/icons/web-development.svg",
    desc: "Build and maintain websites and web apps using modern technologies.",
  },
  {
    name: "Mobile App Development",
    icon: "/icons/mobile-app-developing.svg",
    desc: "Create engaging mobile applications for iOS and Android platforms.",
  },
  {
    name: "Artificial Intelligence",
    icon: "/icons/AI.svg",
    desc: "Develop AI models and solutions to solve complex problems.",
  },
  {
    name: "Machine Learning",
    icon: "/icons/machine-learning.svg",
    desc: "Build predictive models and data-driven algorithms.",
  },
  {
    name: "Data Science",
    icon: "/icons/data-science.svg",
    desc: "Analyze and interpret complex data to help make decisions.",
  },
  {
    name: "Cybersecurity",
    icon: "/icons/cybersecurity.svg",
    desc: "Protect systems and networks from digital threats and attacks.",
  },
  {
    name: "Cloud Computing",
    icon: "/icons/cloud-computing.svg",
    desc: "Manage cloud infrastructure and deploy scalable applications.",
  },
  {
    name: "Graphic Design",
    icon: "/icons/layers.svg",
    desc: "Create visual content for digital and print media.",
  },
];

const PopularCategories = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1260px] w-full px-6 sm:px-4 sm:w-[95%] sm:mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 sm:text-center sm:text-3xl">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-white p-5 rounded-xl shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-full h-full object-contain transition duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg sm:text-base transition">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 transition">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
