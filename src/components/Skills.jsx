const Skills = () => (
  <section className="text-white">
    <h3 className="text-xl font-semibold text-teal-300 mb-2">Technical Skills</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
      <ul className="list-disc list-inside">
        <li>Python, C, JavaScript</li>
        <li>React.js, Redux, HTML5, CSS, MySQL</li>
        <li>Verilog, FPGA, Embedded Systems</li>
      </ul>
      <ul className="list-disc list-inside">
        <li>Linux, Windows, macOS</li>
        <li>SSH, DNS, Load Balancing, AWS CLI</li>
        <li>System Admin, IT Infrastructure, Troubleshooting</li>
      </ul>
    </div>
  </section>
);

export default Skills;