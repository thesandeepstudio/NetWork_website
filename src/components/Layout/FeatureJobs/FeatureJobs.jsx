import React from "react";
import "./FeatureJobs.css"; // ✅ Import CSS file

const jobs = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote • Full-time",
    link: "#",
  },
  {
    id: 2,
    position: "UI/UX Designer",
    company: "Creative Studio",
    location: "New York, USA • Hybrid",
    link: "#",
  },
  {
    id: 3,
    position: "Backend Engineer",
    company: "CloudWorks",
    location: "Berlin, Germany • On-site",
    link: "#",
  },
  {
    id: 4,
    position: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote • Full-time",
    link: "#",
  },
  {
    id: 5,
    position: "UI/UX Designer",
    company: "Creative Studio",
    location: "New York, USA • Hybrid",
    link: "#",
  },
  {
    id: 6,
    position: "Backend Engineer",
    company: "CloudWorks",
    location: "Berlin, Germany • On-site",
    link: "#",
  },
];

export default function FeatureJobs() {
  return (
    <section className="jobs">
      <div className="jobs-container">
        <h2 className="jobs-title">Featured Jobs</h2>
        <p className="jobs-subtitle">Explore our latest opportunities</p>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="job-position">{job.position}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <a href={job.link} className="job-apply">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
