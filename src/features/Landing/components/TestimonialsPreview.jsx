import React from "react";

const testimonials = [
  { id: 1, name: "Alice Johnson", company: "TechCorp", feedback: "Working with this team has been a game-changer.", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "Michael Smith", company: "Creative Studio", feedback: "They delivered exceptional results on time.", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Sophie Lee", company: "CloudWorks", feedback: "Amazing experience! The team truly understands the client’s needs.", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: 4, name: "David Kim", company: "InnovateX", feedback: "Their attention to detail and customer service is outstanding.", avatar: "https://i.pravatar.cc/100?img=4" },
];

export default function Testimonials() {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>

        <div className="overflow-hidden mt-8">
          <div className="flex gap-6 animate-scrollLeft">
            {scrollingTestimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 h-40 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col justify-center text-left h-full overflow-hidden">
                  <p className="text-gray-700 italic text-sm line-clamp-3">
                    "{t.feedback}"
                  </p>
                  <h3 className="text-gray-900 font-semibold text-base mt-1">{t.name}</h3>
                  <p className="text-blue-600 text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
