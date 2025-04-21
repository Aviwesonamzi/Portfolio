import React from "react";

const ResumeDownload = () => (
  <section id="resume">
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <p>You can download my resume below:</p>
    <a
      href="/resume.pdf"
      download
      className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download Resume
    </a>
  </section>
);

export default ResumeDownload;