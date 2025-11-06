import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Changing Landscape of Employment in 2025",
    author: "Sandeep Studio",
    date: "November 6, 2025",
    content: `Remote work has transformed the job market permanently. Companies are investing in upskilling their employees, while job seekers are adapting to emerging technologies and flexible work models. Understanding these trends is key to staying competitive.`,
  },
  {
    id: 2,
    title: "How AI is Reshaping Company Hiring Practices",
    author: "Tech Insights",
    date: "October 30, 2025",
    content: `Artificial Intelligence is now part of recruitment processes. From screening resumes to analyzing candidate fit, AI tools are making hiring faster and more efficient. However, companies must balance automation with human judgment to ensure fairness.`,
  },
  {
    id: 3,
    title: "Top Skills Companies Look for in 2025",
    author: "CareerHub",
    date: "October 20, 2025",
    content: `Soft skills such as communication, problem-solving, and adaptability are as important as technical skills. Companies value employees who can work collaboratively, learn quickly, and thrive in dynamic environments.`,
  },
  {
    id: 4,
    title: "The Gig Economy: Opportunities and Challenges",
    author: "Job Market Today",
    date: "September 15, 2025",
    content: `The gig economy continues to grow, giving workers flexibility while challenging traditional employment models. Companies are adapting by creating hybrid models that blend full-time roles with freelance contributions.`,
  },
  {
    id: 5,
    title: "Employee Well-being as a Strategic Priority",
    author: "WorkLife Insights",
    date: "August 25, 2025",
    content: `Companies are increasingly focusing on mental health and well-being programs. Happy employees are more productive, creative, and loyal, making well-being initiatives a strategic investment for long-term growth.`,
  },
];

const BlogsPages = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-8 space-y-8">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-4">
            By {post.author} | {post.date}
          </p>
          <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPages;
