import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-8 space-y-20">
        <AboutMe />
        <Projects />
        <Skills />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;