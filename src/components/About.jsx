// src/components/About.jsx
import React from 'react';

const About = () => {
  const skills = {
    "Programming Languages": [
      "C++", "Python", "JavaScript", "HTML", "CSS"
    ],
    "Frameworks & Libraries": [
      "React.js", "Node.js", "Express.js", "Flask", "Bootstrap", "Tailwind CSS"
    ],
    "Databases": [
      "MySQL", "MongoDB"
    ],
    "Development Tools": [
      "Git", "GitHub", "Postman", "VS Code", "Linux", "Agile Methodologies"
    ],
    "Machine Learning & AI": [
      "Machine Learning", "Prompt Engineering", "Stack Ensembling", "Data Preprocessing",
      "Model Evaluation", "Hybrid Models (CNN + SVM + RF + VC)"
    ],
    "Networking & Simulation": [
      "Cisco Packet Tracer", "Network Simulation"
    ],
    "Full-Stack Development": [
      "MERN Stack", "RESTful APIs", "Full Stack Development", "Problem Solving"
    ],
    "UI/UX & Design": [
      "UI/UX Design", "Responsive Web Design", "Wireframing", "Prototyping", "Figma", "Adobe XD"
    ],
    "Other Skills": [
      "Power BI", "Spectacle Recommendation System (Face ML)", "Lung Cancer Detection (CNN)",
      "Hand Gesture Recognition", "Cryptography Algorithms", "Distributed Systems Concepts (GFS, Bigtable, Borg, Chubby)"
    ]
  };

  return (
    <section id="about" className="py-16 px-6 bg-[#f0faff] text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">About Me</h2>
        <p className="mb-4 leading-7">
          I’m Gnaneshwar, an aspiring Full Stack and MERN developer with a passion for Python, Machine Learning, and solving real-world problems through technology.
          I'm currently pursuing a B.Tech in Computer Science at Vignan’s Foundation for Science, Technology and Research.
        </p>
        <p className="mb-8 leading-7">
          I enjoy building responsive web applications, working with machine learning models, and exploring emerging technologies.
          I’ve completed certified training in Python, MERN stack, UI/UX design, and other tools, and I love turning creative ideas into impactful solutions.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-6 text-[#1E90FF]">Skills</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#1E90FF] text-white px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-600">
          I’m always eager to learn and grow, and I’m excited about the future of technology.
          Let’s connect and build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
