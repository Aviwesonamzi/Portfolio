import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-700">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#resume" className="hover:underline">Resume</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-3 py-1 border rounded hover:bg-gray-800"
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};

export default Header;