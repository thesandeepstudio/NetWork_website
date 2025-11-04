import React from "react";
import "./Testimonials.css";

const testimonials = [
  { id: 1, name: "Alice Johnson", company: "TechCorp", feedback: "Working with this team has been a game-changer.", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "Michael Smith", company: "Creative Studio", feedback: "They delivered exceptional results on time.", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Sophie Lee", company: "CloudWorks", feedback: "Amazing experience! The team truly understands the client’s needs.", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: 4, name: "David Kim", company: "InnovateX", feedback: "Their attention to detail and customer service is outstanding.", avatar: "https://i.pravatar.cc/100?img=4" },
];

export default function Testimonials() {
  // Duplicate testimonials array for smooth infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>

        <div className="testimonial-slider-wrapper">
          <div className="testimonial-slider">
            {scrollingTestimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <p className="testimonial-feedback">"{t.feedback}"</p>
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-company">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
