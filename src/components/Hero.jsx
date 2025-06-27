import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import profilePic from "../assets/profile.png"; // 👈 place your photo here
import bgImage from "../assets/background.jpg";          // 👈 place watercolor background here

const Hero = () => {
  return (
    
    <section
      className="min-h-screen flex items-center justify-center text-white relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      id="home"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="z-10 text-center px-4">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-white"
        />
        <h1 className="text-4xl mt-4 font-bold">Gnaneshwar Reddy Dontireddy</h1>
        <p className="text-lg mt-2">
          Full Stack Developer | MERN Stack Enthusiast | Python Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a
            href="https://linkedin.com/in/gnaneshwar-reddy-dontireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gnan29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Scroll Down Button */}
        <a
          href="#about"
          className="inline-block mt-8 px-6 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
