import { FaDownload } from 'react-icons/fa';

function ResumeDownload() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Download My Resume</h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Interested in my work? Download my resume for a detailed view of my education, skills, experience, and certifications.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition"
      >
        <FaDownload className="mr-2" /> Download Resume
      </a>
    </section>
  );
}

export default ResumeDownload;
