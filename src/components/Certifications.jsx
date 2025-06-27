// src/components/Certifications.jsx
import React from "react";
import { SiMongodb, SiCisco, SiWalmart, SiPwc, SiTata, SiCodingninjas } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";


const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6 bg-[#f0faff] text-gray-800">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E90FF] mb-8">Certifications</h2>
        
        <ul className="space-y-4 text-left text-lg">
          <li className="flex items-center gap-3">
            <SiCisco className="text-[#1E90FF]" size={22} />
            Python Essentials – Cisco Networking Academy (2025)
          </li>
          <li className="flex items-center gap-3">
            <SiCisco className="text-[#1E90FF]" size={22} />
            Basics of Networking – Cisco Networking Academy (2025)
          </li>
          <li className="flex items-center gap-3">
            <SiWalmart className="text-blue-600" size={22} />
            Advanced Software Engineering Simulation – Walmart Forage (2024)
          </li>
          <li className="flex items-center gap-3">
           <FaChartLine className="text-green-600" size={20} />
            Power BI Simulation – PwC Switzerland (2025)
          </li>
          <li className="flex items-center gap-3">
            <SiTata className="text-red-500" size={22} />
            Data Visualization – TATA Forage (2024)
          </li>
          <li className="flex items-center gap-3">
            <SiCodingninjas className="text-orange-500" size={22} />
            OOP in C++ – Coding Ninjas (2024)
          </li>
          <li className="flex items-center gap-3">
            <FaUniversity className="text-green-600" size={22} />
            PET B1 – Cambridge University (2022)
          </li>
          <li className="flex items-center gap-3">
            <SiMongodb className="text-[#1E90FF]" size={22} />
            MERN Stack Development – ByteXL (Nov 2024)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
