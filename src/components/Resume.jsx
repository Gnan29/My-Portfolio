import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-16 px-6 bg-[#fff0f5] text-gray-800">


      <h2 className="text-3xl md:text-4xl font-bold text-[#1E90FF] mb-6">
        Resume
      </h2>
      <p className="mb-6 text-gray-700">
        Click below to download or preview my resume.
      </p>

      {/* ✅ Download Button */}
      <a
        href="/ResumeDGR.pdf"
        download
        className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
      >
        Download Resume
      </a>

      {/* ✅ Resume Preview (iframe) */}
      <div className="mt-10 max-w-4xl mx-auto">
        <iframe
          src="/ResumeDGR.pdf"
          width="100%"
          height="600px"
          className="border rounded-lg shadow"
          title="Resume Preview"
        />
      </div>
    </section>
  );
};

export default Resume;
