// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Fitness Tracker Web App",
    stack: "MERN (MongoDB, Express.js, React, Node.js)",
    description:
      "Developed a full-stack fitness tracker with secure authentication, daily log tracking, and RESTful APIs for CRUD operations.",
    
  },
  {
    title: "Vignanites Job Portal",
    stack: "React, Node.js, MySQL",
    description:
      "Built a portal for students to find internships and jobs. Included role-based access, resume upload, job listing & admin dashboard.",
  },
  {
    title: "E-Commerce Frontend",
    stack: "React.js, Tailwind CSS",
    description:
      "Designed a clean e-commerce UI with product cards, cart simulation, and responsive layout. Focused on reusability and UI flow.",
    
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#e8ffe8] text-gray-900">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E90FF] mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-600 italic mt-1 mb-2">
                {proj.stack}
              </p>
              <p className="text-gray-700 mb-4 text-sm">{proj.description}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
