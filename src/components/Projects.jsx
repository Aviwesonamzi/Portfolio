import React, { useState } from "react";

const sampleProjects = [
  { id: 1, title: "React Weather App", category: "React", description: "Weather info by location" },
  { id: 2, title: "Portfolio Website", category: "HTML/CSS", description: "Personal showcase site" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All" ? sampleProjects : sampleProjects.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="mb-4 space-x-4">
        {['All', 'React', 'HTML/CSS'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 border rounded ${filter === cat ? 'bg-blue-600' : 'bg-gray-700'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
