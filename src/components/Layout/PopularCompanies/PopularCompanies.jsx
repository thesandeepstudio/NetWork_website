import React from "react";
import "./PopularCompanies.css"; // Import the CSS file

const companies = [
  {
    id: 1,
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    location: "California, USA",
    jobs: "120+ Open Jobs",
  },
  {
    id: 2,
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    location: "Seattle, USA",
    jobs: "95+ Open Jobs",
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    location: "Redmond, USA",
    jobs: "80+ Open Jobs",
  },
  {
    id: 4,
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    location: "San Francisco, USA",
    jobs: "70+ Open Jobs",
  },

  {
    id: 5,
    name: "Facebook",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    location: "California, USA",
    jobs: "120+ Open Jobs",
  },
  {
    id: 6,
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    location: "Seattle, USA",
    jobs: "95+ Open Jobs",
  },
  {
    id: 7,
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    location: "San Francisco, USA",
    jobs: "50+ Open Jobs",
  },
  {
    id: 8,
    name: "Oracle",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    location: "Redwood Shores, USA",
    jobs: "55+ Open Jobs",
  },
];

export default function PopularCompanies() {
  return (
    <section className="companies">
      <div className="companies-container">
        <h2 className="companies-title">Popular Companies</h2>
        <p className="companies-subtitle">Work with top organizations</p>

        <div className="companies-grid">
          {companies.map((company) => (
            <div key={company.id} className="company-card">
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
              <h3 className="company-name">{company.name}</h3>
              <p className="company-location">{company.location}</p>
              <p className="company-jobs">{company.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
