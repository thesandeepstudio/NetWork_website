import React from "react";

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

export default function PopularCompaniesPreview() {
  return (
    <section className="bg-white py-16 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h2 className="text-2xl font-bold text-gray-900">Popular Companies</h2>
        <p className="mt-2 text-gray-500 text-base">
          Work with top organizations
        </p>

        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {company.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{company.location}</p>
              <p className="text-blue-600 font-medium text-sm mt-2">
                {company.jobs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
