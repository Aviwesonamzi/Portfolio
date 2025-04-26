import React from "react";
import { Link } from "react-scroll";
import profilePic from "../assets/profile/my_profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg mt-4">
      
      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Aviwe Sonamzi</h1>
        <p className="text-lg md:text-xl">
          A passionate Full Stack Developer & Cybersecurity Enthusiast 🚀
        </p>
        
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80} 
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          Contact Me
        </Link>
      </div>

      {/* Profile Image */}
      <div className="mb-6 md:mb-0">
        <img 
          src={profilePic} 
          alt="Aviwe Sonamzi Profile" 
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 border-white"
        />
      </div>

    </section>
  );
};

export default Hero;

