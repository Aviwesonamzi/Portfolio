import { motion } from "framer-motion";
import profilePic from '../assets/profile/my_profile.jpg';

const AboutMe = () => (
  <motion.section
    className="text-white bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 space-y-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      {/* Animated Profile Picture */}
      <motion.img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover mb-4 shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      <h2 className="text-3xl font-bold text-teal-400">Aviwe Sonamzi</h2>
      <p className="text-gray-400 text-lg max-w-2xl">
        Motivated and detail-oriented IT professional passionate about cybersecurity, system administration, and full-stack development. Always eager to learn and contribute to impactful projects.
      </p>
    </div>
  </motion.section>
);

export default AboutMe;
