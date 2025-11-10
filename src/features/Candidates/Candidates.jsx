import React from "react";
import NavBar from "../../shared/Layout/Navbar/NavBar";
import SubHeader from "../../shared/Layout/SubHeader/SubHeader";

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
    <>
      <NavBar />
      <SubHeader />
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Top Candidates</h2>
          <p className="mt-2 text-gray-500 text-base">
            Meet our skilled professionals
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {candidate.name}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{candidate.role}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {candidate.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
