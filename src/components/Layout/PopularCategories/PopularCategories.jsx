import React from "react";
import "./PopularCategories.css";

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
    <section className="popular-categories">
      <div className="container">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="category-content">
                <span className="category-icon">
                  <img src={cat.icon} alt={`${cat.name} Icon`} />
                </span>
                <div className="category-text">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
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
