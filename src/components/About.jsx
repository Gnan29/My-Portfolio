// src/components/About.jsx
import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'Python', 'C++',
  'React', 'Node.js', 'Express.js', 'MySQL',
  'MongoDB', 'Flask', 'Machine Learning', 'Git', 'Postman'
];

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-[#f0faff] text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">About Me</h2>
        <p className="mb-4 leading-7">
          I’m Gnaneshwar, an aspiring full stack and MERN developer with a passion for Python and Machine Learning.
          I'm currently pursuing a B.Tech in Computer Science at Vignan’s Foundation for Science, Technology and Research.
        </p>
        <p className="mb-8 leading-7">
          I enjoy solving technical problems, collaborating on full-stack projects, and learning new technologies that
          make development faster and more reliable. I’ve completed certified training in Python, MERN stack, and more,
          and I love turning creative ideas into code.
        </p>

       <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1E90FF]">Skills</h3>
<div className="flex flex-wrap gap-2">
  {[
    "C++", "Python", "JavaScript", "HTML", "CSS",
    "React.js", "Node.js", "Express.js", "MySQL", "MongoDB",
    "Flask", "Tailwind CSS", "Bootstrap", "Postman", "Git",
    "GitHub", "Linux", "Machine Learning", "Prompt Engineering","Network Simulation", "Cisco Packet Tracer","MERN Stack", "Full Stack Development", "RESTful APIs", "Agile Methodologies", "Problem Solving"
  ].map((skill) => (
    <span
      key={skill}
      className="bg-[#1E90FF] text-white px-3 py-1 rounded-full text-sm shadow-sm"
    >
      {skill}
    </span>
  ))}
</div>
        <p className="mt-8 text-gray-600">
          I’m always eager to learn and grow, and I’m excited about the future of technology.
          Let’s connect and build something amazing together!
        </p>

      </div>
    </section>
  );
};

export default About;
