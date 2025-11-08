import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar.jsx";
import SubHeader from "../../shared/Layout/SubHeader/SubHeader.jsx";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    link: "#",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "NYC",
    type: "Hybrid",
    link: "#",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudWorks",
    location: "Berlin",
    type: "On-site",
    link: "#",
  },
  {
    id: 4,
    title: "Fullstack Developer",
    company: "InnovateX",
    location: "London",
    type: "Remote",
    link: "#",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    link: "#",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudWorks",
    location: "Berlin",
    type: "On-site",
    link: "#",
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "DataLab",
    location: "San Francisco",
    type: "Full-time",
    link: "#",
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Remote",
    type: "Contract",
    link: "#",
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "TechCorp",
    location: "NYC",
    type: "Full-time",
    link: "#",
  },
  {
    id: 10,
    title: "DevOps Manager",
    company: "CloudWorks",
    location: "Berlin",
    type: "On-site",
    link: "#",
  },
  {
    id: 11,
    title: "UI Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Part-time",
    link: "#",
  },
  {
    id: 12,
    title: "Software Engineer",
    company: "InnovateX",
    location: "London",
    type: "Full-time",
    link: "#",
  },
];

const FindJob = () => {
  return (
    <>
      <NavBar />
      <SubHeader />
      <section className="bg-white py-16 mt-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">
            Featured Jobs
          </h2>
          <p className="mt-2 text-gray-500 text-left">
            Explore our latest opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm transition transform hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="mt-1 text-gray-700">{job.company}</p>
                <p className="mt-1 text-gray-500 text-sm">
                  {job.location} • {job.type}
                </p>
                <a
                  href={job.link}
                  className="inline-block mt-4 px-5 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FindJob;
