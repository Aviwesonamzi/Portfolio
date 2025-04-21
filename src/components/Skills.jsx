import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

const Skills = () => (
  <section id="skills">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <ul className="flex flex-wrap gap-4">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="bg-blue-700 px-4 py-2 rounded-full text-white shadow"
        >
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
