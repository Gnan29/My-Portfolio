import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">

      <Navbar />
      <Hero />
      

      {/* Divider between Hero and About */}
      <div className="h-2 bg-gradient-to-r from-[#1E90FF] via-white to-[#32CD32] dark:via-gray-900" />

      <About />

      {/* Divider between About and Projects */}
      <div className="h-2 bg-gradient-to-r from-[#32CD32] via-white to-[#1E90FF] dark:via-gray-900" />

      <Projects />

      {/* Divider between Projects and Resume */}
      <div className="h-2 bg-gradient-to-r from-[#1E90FF] via-white to-[#32CD32] dark:via-gray-900" />

      <Resume />

      {/* Divider between Resume and Certifications */}
      <div className="h-2 bg-gradient-to-r from-[#32CD32] via-white to-[#1E90FF] dark:via-gray-900" />

      <Certifications />

      {/* Divider between Certifications and Contact */}
      <div className="h-2 bg-gradient-to-r from-[#1E90FF] via-white to-[#32CD32] dark:via-gray-900" />

      <Contact />
    </div>
  );
}

export default App;
