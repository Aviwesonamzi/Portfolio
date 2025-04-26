import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 text-center border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Aviwesonamzi" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/aviwesonamzi" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:aviwesonamzi1@gmail.com" className="hover:text-teal-400 transition">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} Aviwe Sonamzi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
