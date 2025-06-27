// src/components/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-[#e8ffe8] text-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E90FF] mb-6">
          Contact Me
        </h2>

        <div className="text-lg text-gray-700 space-y-4">
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-green-500" />
            +91-8639471490
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:gnanvit11@gmail.com" className="underline text-[#1E90FF]">
              gnanvit11@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            Cherukupalli, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
