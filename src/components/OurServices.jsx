import { FaCode, FaShieldAlt, FaUserTie, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-teal-400" />,
    title: 'Front-End Development',
    description: 'Responsive web applications using React, Tailwind CSS, and JavaScript.',
  },
  {
    icon: <FaShieldAlt size={40} className="text-teal-400" />,
    title: 'Security Analyst',
    description: 'Security monitoring, authentication systems, vulnerability mitigation.',
  },
  {
    icon: <FaUserTie size={40} className="text-teal-400" />,
    title: 'Virtual Assistant',
    description: 'Task management, documentation, and digital assistance support.',
  },
  {
    icon: <FaPaintBrush size={40} className="text-teal-400" />,
    title: 'Web Design',
    description: 'Designing user-friendly, visually appealing layouts and wireframes.',
  },
];

function OurServices() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
