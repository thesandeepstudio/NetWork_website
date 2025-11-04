import React from "react";
import "./Candidates.css"; // Create this CSS file

const candidates = [
  {
    id: 1,
    name: "Laxman Adhikari",
    role: "Frontend Developer",
    location: "Thimi, Bhakatapur",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "UI/UX Designer",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    id: 3,
    name: "Sophie Lee",
    role: "Backend Engineer",
    location: "Berlin, Germany",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Full Stack Developer",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    id: 5,
    name: "Alice Johnson",
    role: "Frontend Developer",
    location: "California, USA",
    avatar: "https://i.pravatar.cc/100?img=55",
  },
  {
    id: 6,
    name: "Michael Smith",
    role: "UI/UX Designer",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/100?img=66",
  },
  {
    id: 7,
    name: "Sophie Lee",
    role: "Backend Engineer",
    location: "Berlin, Germany",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 8,
    name: "David Kim",
    role: "Full Stack Developer",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/100?img=63",
  },

  {
    id: 9,
    name: "Alice Johnson",
    role: "Frontend Developer",
    location: "California, USA",
    avatar: "https://i.pravatar.cc/100?img=21",
  },
  {
    id: 10,
    name: "Michael Smith",
    role: "UI/UX Designer",
    location: "New York, USA",
    avatar: "https://i.pravatar.cc/100?img=42",
  },
  {
    id: 11,
    name: "Sophie Lee",
    role: "Backend Engineer",
    location: "Berlin, Germany",
    avatar: "https://i.pravatar.cc/100?img=56",
  },
  {
    id: 12,
    name: "David Kim",
    role: "Full Stack Developer",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/100?img=64",
  },
];

export default function Candidates() {
  return (
    <section className="candidates">
      <div className="candidates-container">
        <h2 className="candidates-title">Top Candidates</h2>
        <p className="candidates-subtitle">Meet our skilled professionals</p>

        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className="candidate-avatar"
              />
              <h3 className="candidate-name">{candidate.name}</h3>
              <p className="candidate-role">{candidate.role}</p>
              <p className="candidate-location">{candidate.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
