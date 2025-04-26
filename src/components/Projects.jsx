import project1 from '../assets/projects/airbnb_clone_v3.png';
import project2 from '../assets/projects/monty_project.png';
import project3 from '../assets/projects/product_landline_page.png';
import project4 from '../assets/projects/recipe_project.png';
import project5 from '../assets/projects/voice_assistance.png';

const projects = [
  {
    title: "AirBnB_clone_v3",
    image: project1,
    description: "AirBnB full-stack clone with Flask API and dynamic UI.",
    link: "https://github.com/Aviwesonamzi/AirBnB_clone_v3"
  },
  {
    title: 'Monty Project',
    image: project2,
    description: 'An interpreter for Monty bytecode written in C, demonstrating stack and opcode execution.',
    link: "https://github.com/Aviwesonamzi/monty"
  },
  {
    title: 'Product Landline Page',
    image: project3,
    description: 'Responsive landing page design for a landline service product using HTML and CSS.',
    link: "https://github.com/Aviwesonamzi/Product_landline_page"
  },
  {
    title: 'Recipe Project',
    image: project4,
    description: 'Simple and elegant recipe app showcasing ingredients and instructions with clean UI.',
    link: "https://github.com/Aviwesonamzi/recipe_project"
  },
  {
    title: 'Voice Assistance',
    image: project5,
    description: 'Voice-controlled assistant app using JavaScript and browser speech APIs.',
    link: "https://github.com/Aviwesonamzi/Voice_assistance"
  },
];

function Projects() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group border border-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-lg font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
